from __future__ import print_function
import os
import neat
import process
import gym, ppaquette_gym_super_mario
import pickle
import multiprocessing as mp


class Train:
    def __init__(self):
        self.actions = [
            [0, 0, 0, 1, 0, 1],
            [0, 0, 0, 1, 1, 1],
        ]

        self.env = gym.make('ppaquette/SuperMarioBros-1-1-Tiles-v0')

        self.env.no_render = True

    def _fitness_func(self, genome, config, o):
        try:
            state = self.env.reset()
            net = neat.nn.FeedForwardNetwork.create(genome, config)
            done = False
            info = {}
            while not done:
                state = state.reshape(208)
                output = net.activate(state)
                ind = output.index(max(output))
                s, reward, done, info = self.env.step(self.actions[ind])
                state = s
            # [print(str(i) + " : " + str(info[i]), end=" ") for i in info.keys()]
            # print("\n******************************")
            o.put(info['distance'])
        except KeyboardInterrupt:
            self.env.close()
            exit()

    def _eval_genomes(self, genomes, config):
        idx, genomes = zip(*genomes)
        output = mp.Queue()
        processes = [mp.Process(target=self._fitness_func, args=(genome, config, output)) for genome in genomes]
        temp = [p.start() for p in processes]
        temp = [p.join() for p in processes]
        results = [output.get() for p in processes]
        for n, r in enumerate(results):
            genomes[n].fitness = r
        self.env.close()
        self.env = gym.make('ppaquette/SuperMarioBros-1-1-Tiles-v0')

    def _run(self, config_file):
        config = neat.Config(neat.DefaultGenome, neat.DefaultReproduction,
                             neat.DefaultSpeciesSet, neat.DefaultStagnation,
                             config_file)

        p = neat.Population(config)
        p.add_reporter(neat.StdOutReporter(True))
        stats = neat.StatisticsReporter()
        p.add_reporter(stats)
        p.add_reporter(neat.Checkpointer(5))
        winner = p.run(self._eval_genomes, 1000)

        pickle.dump(winner, open('winner.pkl', 'wb'))

    def main(self):
        local_dir = os.path.dirname(__file__)
        config_path = os.path.join(local_dir, 'config')
        self._run(config_path)


if __name__ == "__main__":
    t = Train()
    t.main()
