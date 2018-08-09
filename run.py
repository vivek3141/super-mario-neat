import neat
import pickle
import gym, ppaquette_gym_super_mario

ACTIONS = [
            [0, 0, 0, 1, 0, 1],
            [0, 0, 0, 1, 1, 1],
        ]

def main():
    config = neat.Config(
        neat.DefaultGenome,
        neat.DefaultReproduction,
        neat.DefaultSpeciesSet,
        neat.DefaultStagnation,
        'config'
    )

    winner = pickle.load(open('winner.pkl', 'rb'))
    env = gym.make('ppaquette/SuperMarioBros-1-1-Tiles-v0')
    state = env.reset()
    net = neat.nn.FeedForwardNetwork.create(winner, config)
    done = False
    while not done:
        state = state.reshape(208)
        output = net.activate(state)
        ind = output.index(max(output))
        s, reward, done, info = env.step(ACTIONS[ind])
        state = s
    print(info)


if __name__ == "__main__":
    main()
