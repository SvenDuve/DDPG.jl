using DDPG
using Documenter

DocMeta.setdocmeta!(DDPG, :DocTestSetup, :(using DDPG); recursive=true)

makedocs(;
    modules=[DDPG],
    authors="Sven Duve <svenduve@gmail.com> and contributors",
    repo="https://github.com/SvenDuve/DDPG.jl/blob/{commit}{path}#{line}",
    sitename="DDPG.jl",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        canonical="https://SvenDuve.github.io/DDPG.jl",
        edit_link="main",
        assets=String[],
    ),
    pages=[
        "Home" => "index.md",
    ],
)

deploydocs(;
    repo="github.com/SvenDuve/DDPG.jl",
    devbranch="main",
)
