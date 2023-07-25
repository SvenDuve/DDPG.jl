```@meta
CurrentModule = DDPG
```

# DDPG

Documentation for [DDPG](https://github.com/SvenDuve/DDPG.jl).

This implementation of DDPG is based on the paper [Continuous control with deep reinforcement learning](https://arxiv.org/abs/1509.02971) by Lillicrap et al. (2015). It solves the following environments:

- [Pendulum](https://gymnasium.farama.org/environments/classic_control/pendulum/)
- [Lunar Lander](https://gymnasium.farama.org/environments/box2d/lunar_lander/)


## Installation

In the julia REPL, run

```julia
using Pkg
Pkg.add(url="https://github.com/SvenDuve/DDPG.jl")
```

This package is not for general use. To be fully functional, it requires the following packages:

- [RLTypes](https://github.com/SvenDuve/RLTypes.jl)
- [Conda](https://github.com/JuliaPy/Conda.jl)
- [PyCall](https://github.com/JuliaPy/PyCall.jl)
- [Gymnasium](https://github.com/SvenDuve/Gymnasium), this is a slightly adapted version. The original package can be found [here](https://github.com/Farama-Foundation/Gymnasium)


Run the following:

```julia
using Pkg
Pkg.add(url="https://github.com/SvenDuve/RLTypes.jl")
Pkg.add("Conda")
Pkg.add("PyCall")
```

Then again within julia,

```julia
using Conda
using PyCall
Conda.pip("install", "git+https://github.com/SvenDuve/Gymnasium")
```


Bring package into scope with

```julia
using DDPG
```

## Example usage


Once the above is installed, the following code can be used to train an agent:

```julia
using DDPG
using RLTypes
agent(LunarLander(), AgentParameter(training_episodes=100, batch_size=128))
```

This function returns a data structure containing a trained agent. 


## Function Reference

```@index
```

```@autodocs
Modules = [DDPG]
```
