import os
import neat
import gym, ppaquette_gym_super_mario
import pickle
import multiprocessing as mp
import visualize
import train

gym.logger.set_level(40)


class Train(train.Train):
    def __init__(self, generations, file_name, parallel, level):
        super().__init__(generations, parallel, level)
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


if __name__ == "__main__":
    t = Train(1000, "./Files/neat-checkpoint-2492", 2, level="1-1")
    t.main()
