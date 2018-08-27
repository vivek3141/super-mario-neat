import neat
import pickle
import gym, ppaquette_gym_super_mario
import visualize
import gzip
import neat.genome

ACTIONS = [
    [0, 0, 0, 1, 0, 1],
    [0, 0, 0, 1, 1, 1],
]
# FILENAME = "./Files/gen_2284"
CONFIG = 'config'


def main(config_file):
    # with gzip.open(FILENAME) as f:
    #   config = pickle.load(f)[1]
    # print(str(config.genome_type.size))
    config = neat.Config(neat.DefaultGenome, neat.DefaultReproduction,
                         neat.DefaultSpeciesSet, neat.DefaultStagnation,
                         config_file)
    genome = pickle.load(open('finisher.pkl', 'rb'))
    env = gym.make('ppaquette/SuperMarioBros-2-1-Tiles-v0')
    net = neat.nn.FeedForwardNetwork.create(genome, config)
    info = {'distance': 0}
    while info['distance'] != 3252:
        state = env.reset()
        done = False
        i = 0
        old = 40
        while not done:
            state = state.reshape(208)
            output = net.activate(state)
            ind = output.index(max(output))
            s, reward, done, info = env.step(ACTIONS[ind])
            state = s
            i += 1
            if i % 50 == 0:
                if old == info['distance']:
                    break

                else:
                    old = info['distance']
        print("Distance: {}".format(info['distance']))
    env.close()


if __name__ == "__main__":
    main(CONFIG)
