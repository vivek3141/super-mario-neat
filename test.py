import gym
import ppaquette_gym_super_mario

env = gym.make('ppaquette/SuperMarioBros-1-1-Tiles-v0')
env.no_render = False
for i in range(10):
    observation = env.reset()
    done = False
    t = 0
    while not done:
        action = env.action_space.sample()  # choose random action
        observation, reward, done, info = env.step([0, 0, 0, 0, 1, 0])  # feedback from environment

print(info)