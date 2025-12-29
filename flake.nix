{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";
    clog.url = "github:cronokirby/clog";
  };

  outputs = { self, flake-utils, nixpkgs, clog }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = (import nixpkgs) {
          inherit system;
        };
      in rec {
        defaultPackage = pkgs.stdenv.mkDerivation {
          name = "blog";
          src = pkgs.lib.cleanSource ./.;
          nativeBuildInputs = [ clog.defaultPackage.${system} ];
          buildPhase = ''
            mkdir -p $out
            clog $src $out
          '';
        };
      }
    );
}
