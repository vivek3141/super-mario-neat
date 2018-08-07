from __future__ import print_function
import os
import neat
import process
import gym, ppaquette_gym_super_mario
import pickle

ACTIONS = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 0, 1],
    [0, 0, 0, 1, 1, 1],
]

env = gym.make('ppaquette/SuperMarioBros-1-1-Tiles-v0')

env.no_render = True


def eval_genomes(genomes, config):
    for genome_id, genome in genomes:
        state = env.reset()
        net = neat.nn.FeedForwardNetwork.create(genome, config)
        done = False
        info = {}
        while not done:
            state = state.reshape(208)
            output = net.activate(state)
            ind = output.index(max(output))
            s, reward, done, info = env.step(ACTIONS[ind])
            state = s
        [print(str(i) + " : " + str(info[i]), end=" ") for i in info.keys()]
        print()
        print("******************************")
        genome.fitness = info['distance'] - 40


def run(config_file):
    config = neat.Config(neat.DefaultGenome, neat.DefaultReproduction,
                         neat.DefaultSpeciesSet, neat.DefaultStagnation,
                         config_file)

    p = neat.Population(config)
    p.add_reporter(neat.StdOutReporter(True))
    stats = neat.StatisticsReporter()
    p.add_reporter(stats)
    p.add_reporter(neat.Checkpointer(5))

    winner = p.run(eval_genomes, 35)

    pickle.dump(winner, open('winner.pkl', 'wb'))


if __name__ == '__main__':
    local_dir = os.path.dirname(__file__)
    config_path = os.path.join(local_dir, 'config')
    run(config_path)
