using DDPG
using RLTypes
using Flux
using Test
using Conda
using PyCall

begin 
    Conda.pip_interop(true)
    Conda.add("wheel")
    Conda.add("box2d-py")
    Conda.add("pygame")
    Conda.pip("install", "git+https://github.com/SvenDuve/Gymnasium")
end

@testset "DDPG.jl" begin
    # Write your tests here.
    model = setCritic(1, 1)
    @test model isa Chain{Tuple{Dense{typeof(relu), Matrix{Float32}, Vector{Float32}}, Dense{typeof(relu), Matrix{Float32}, Vector{Float32}}, Dense{typeof(identity), Matrix{Float32}, Vector{Float32}}}}
    @test model([0.f0, 0.f0]) == [0.f0]
end
