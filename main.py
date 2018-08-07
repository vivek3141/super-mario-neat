import argparse
import train as t
import run as r

parser = argparse.ArgumentParser(description='Run the program')
parser.add_argument('mode', metavar='mode', type=str,
                    help="Specify 'train' or 'run' to run or train the model")
args = parser.parse_args()

if args.mode.upper() == "TRAIN":
    t.main()

if args.mode.upper() == "RUN":
    r.main()

else:
    print("Please enter 'train' or 'mode'")