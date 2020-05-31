import argparse
import train as t
import run as r
import cont_train as ct

parser = argparse.ArgumentParser(description='Run the program')
parser.add_argument('mode', metavar='mode', type=str,
                    help="Specify 'train' or 'run' to run or train the model. To continue training, specify 'cont_train")
parser.add_argument('--gen', metavar='generations', type=int, help='Number of Generations to run for', nargs='?')
parser.add_argument('--file', metavar='file_name', type=str, help='File name to continue training or to run the winner',
                    nargs='?')
parser.add_argument('--config', metavar='config', type=str, help='Configuration File', default='config', nargs='?')
parser.add_argument('--parallel', metavar='parallel', type=int,
                    help='Number of genomes to run at once', nargs='?', default=2)
parser.add_argument('--level', metavar='level', type=str, help='Which level to run, Eg. 1-1', default='1-1', nargs='?')

args = parser.parse_args()

if (args.mode.upper() == "TRAIN" or args.mode.upper() == "CONT_TRAIN") and args.gen is None:
    parser.error("Please specify number of generations!")

if args.mode.upper() == "CONT_TRAIN" and args.file is None:
    parser.error("Please specify checkpoint file ("
                 "./Files/neat-checkpoint-2492 can be used to start from generation 2492)!")

if args.mode.upper() == "TRAIN":
    t = t.Train(args.gen, args.parallel, args.level)
    t.main(config_file=args.config)
elif args.mode.upper() == "CONT_TRAIN":
    c = ct.Train(args.gen, args.file, args.parallel, args.level)
    c.main(config_file=args.config)

elif args.mode.upper() == "RUN":
    args.file = "finisher.pkl" if args.file is None else args.file
    r.main(args.config, args.file, args.level)

else:
    print("Please enter 'train' or 'mode' or 'cont_train")
