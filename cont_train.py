import os
import neat
import process
import gym, ppaquette_gym_super_mario
import pickle
import multiprocessing as mp
import visualize
import train

gym.logger.set_level(40)


class Train(train.Train):
    def __init__(self, generations, file_name, parallel):
        super().__init__(generations, parallel)
        self.actions = [
            [0, 0, 0, 1, 0, 1],
            [0, 0, 0, 1, 1, 1],
        ]
        self.lock = mp.Lock()
        self.file_name = file_name

    def _run(self, config_file, n):
        config = neat.Config(neat.DefaultGenome, neat.DefaultReproduction,
                             neat.DefaultSpeciesSet, neat.DefaultStagnation,
                             config_file)
        # p = neat.Population(config)
        p = neat.Checkpointer.restore_checkpoint(self.file_name)
        p.add_reporter(neat.StdOutReporter(True))
        p.add_reporter(neat.Checkpointer(5))
        stats = neat.StatisticsReporter()
        p.add_reporter(stats)
        print("loaded checkpoint...")
        winner = p.run(self._eval_genomes, n)
        win = p.best_genome
        pickle.dump(winner, open('winner.pkl', 'wb'))
        pickle.dump(win, open('real_winner.pkl', 'wb'))

        visualize.draw_net(config, winner, True)
        visualize.plot_stats(stats, ylog=False, view=True)
        visualize.plot_species(stats, view=True)


"""
    def _get_actions(self, a):
        return self.actions[a.index(max(a))]

    def _fitness_func_nonout(self, genomes, config):
        env = gym.make('ppaquette/SuperMarioBros-1-1-Tiles-v0')
        idx, genomes = zip(*genomes)
        for genome in genomes:
            try:
                state = env.reset()
                net = neat.nn.FeedForwardNetwork.create(genome, config)
                done = False
                i = 0
                old = 40
                while not done:
                    state = state.flatten()
                    output = net.activate(state)
                    output = self._get_actions(output)
                    s, reward, done, info = env.step(output)
                    state = s
                    i += 1
                    if i % 50 == 0:
                        if old == info['distance']:
                            break
                        else:
                            old = info['distance']

                # [print(str(i) + " : " + str(info[i]), end=" ") for i in info.keys()]
                # print("\n******************************")

                fitness = -1 if info['distance'] <= 40 else info['distance']
                genome.fitness = fitness
                env.close()
            except KeyboardInterrupt:
                env.close()
                exit()

    def _fitness_func(self, genome, config, o):
        env = gym.make('ppaquette/SuperMarioBros-1-1-Tiles-v0')
        # env.configure(lock=self.lock)
        try:
            state = env.reset()
            net = neat.nn.FeedForwardNetwork.create(genome, config)
            done = False
            i = 0
            old = 40
            while not done:
                state = state.flatten()
                output = net.activate(state)
                output = self._get_actions(output)
                s, reward, done, info = env.step(output)
                state = s
                i += 1
                if i % 50 == 0:
                    if old == info['distance']:
                        break
                    else:
                        old = info['distance']

            # [print(str(i) + " : " + str(info[i]), end=" ") for i in info.keys()]
            # print("\n******************************")

            fitness = -1 if info['distance'] <= 40 else info['distance']
            if fitness >= 3252:
                pickle.dump(genome, open("finisher.pkl", "wb"))
                env.close()
                print("Done")
                exit()
            o.put(fitness)
            env.close()
        except KeyboardInterrupt:
            env.close()
            exit()

    def _eval_genomes(self, genomes, config):
        idx, genomes = zip(*genomes)

        for i in range(0, len(genomes), 2):
            output = mp.Queue()

            processes = [mp.Process(target=self._fitness_func, args=(genome, config, output)) for genome in
                         genomes[i:i + 2]]

            temp = [p.start() for p in processes]
            temp = [p.join() for p in processes]

            results = [output.get() for p in processes]

            for n, r in enumerate(results):
                genomes[i + n].fitness = r
"""

if __name__ == "__main__":
    t = Train(1000, "./Files/neat-checkpoint-2492", 2)
    t.main()
