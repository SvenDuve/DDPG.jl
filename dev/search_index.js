var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = DDPG","category":"page"},{"location":"#DDPG","page":"Home","title":"DDPG","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for DDPG.","category":"page"},{"location":"","page":"Home","title":"Home","text":"This implementation of DDPG is based on the paper Continuous control with deep reinforcement learning by Lillicrap et al. (2015). It solves the following environments:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Pendulum\nLunar Lander","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"In the julia REPL, run","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg\nPkg.add(url=\"https://github.com/SvenDuve/DDPG.jl\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"This package is not for general use. To be fully functional, it requires the following packages:","category":"page"},{"location":"","page":"Home","title":"Home","text":"RLTypes\nConda\nPyCall\nGymnasium, this is a slightly adapted version. The original package can be found here","category":"page"},{"location":"","page":"Home","title":"Home","text":"Run the following:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg\nPkg.add(url=\"https://github.com/SvenDuve/RLTypes.jl\")\nPkg.add(\"Conda\")\nPkg.add(\"PyCall\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"Then again within julia,","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Conda\nusing PyCall\nConda.pip(\"install\", \"git+https://github.com/SvenDuve/Gymnasium\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"Bring package into scope with","category":"page"},{"location":"","page":"Home","title":"Home","text":"using DDPG","category":"page"},{"location":"#Example-usage","page":"Home","title":"Example usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Once the above is installed, the following code can be used to train an agent:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using DDPG\nusing RLTypes\nagent(LunarLander(), AgentParameter(training_episodes=100, batch_size=128))","category":"page"},{"location":"","page":"Home","title":"Home","text":"This function returns a data structure containing a trained agent. ","category":"page"},{"location":"#Function-Reference","page":"Home","title":"Function Reference","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [DDPG]","category":"page"},{"location":"#DDPG.action-NTuple{5, Any}","page":"Home","title":"DDPG.action","text":"action(model, state, train, ep, hp)\n\nReturns an action based on the current state, noise and the model.\n\n\n\n\n\n","category":"method"},{"location":"#DDPG.agent-Tuple{RLTypes.ContinuousEnvironment, RLTypes.AgentParameter}","page":"Home","title":"DDPG.agent","text":"agent(environment::ContinuousEnvironment, agentParams::AgentParameter)\n\nMain DDPG Algorithm to train an agent.\n\n\n\n\n\n","category":"method"},{"location":"#DDPG.renderEnv","page":"Home","title":"DDPG.renderEnv","text":"renderEnv(environment::ContinuousEnvironment, policy, seed=42)\n\nRenders a continuous environment with the given policy.\n\n\n\n\n\n","category":"function"},{"location":"#DDPG.setActor-Tuple{Any, Any}","page":"Home","title":"DDPG.setActor","text":"setActor(state_size, action_size)\n\nSet an actor model for the DDPG agent.\n\n\n\n\n\n","category":"method"},{"location":"#DDPG.setCritic-Tuple{Any, Any}","page":"Home","title":"DDPG.setCritic","text":"setCritic(state_size, action_size)\n\nSet a critic model for the DDPG agent.\n\n\n\n\n\n","category":"method"},{"location":"#DDPG.soft_update!-Tuple{Any, Any, Any}","page":"Home","title":"DDPG.soft_update!","text":"soft_update!(target_model, main_model, τ)\n\nSoft update of the target model.\n\n\n\n\n\n","category":"method"},{"location":"#DDPG.train_step!-Tuple{Any, Any, Any, Any, Any, Any, Any, Any, Any, Any, Any, RLTypes.Parameter}","page":"Home","title":"DDPG.train_step!","text":"train_step!(S, A, R, S´, T, μθ, μθ´, Qϕ, Qϕ´, opt_critic, opt_actor, ap::Parameter)\n\nTrain the DDPG agent with gradient descent.\n\n\n\n\n\n","category":"method"}]
}
