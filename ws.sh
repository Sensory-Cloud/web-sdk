#!/bin/bash
# ------------------------------------------------------------------
# [Author] Bryan McGrane
# [Title] Sensory Cloud Web SDK Helper Script
# ------------------------------------------------------------------
SUBJECT=ph
USAGE="Usage: ph [OPTIONS] [COMMAND]"

OPTIONS="
    Options:\n
    -h\t Helper Script Description
"

COMMANDS="
    Commands:\n
    lint | l\t\t Lint Source Files\n
    build | b\t\t Build Tsc Package\n
    test | t\t\t Run Unit Tests\n
    genproto | gp\t\t Generate Proto Files\n
    help | h\t\t Display This Help Message\n
"
# --- Initialization -----------------------------------------------
set -euo pipefail

# --- Functions ----------------------------------------------------
print_helper() {
  echo
  echo ${USAGE}
  echo
  echo -e ${OPTIONS}
  echo
  echo -e ${COMMANDS}
}

throw_not_implemented_error() {
  echo "This feature is not yet implemented!"
  exit 125;
}

generate_proto_files() {
  echo "Generating proto files"
  cd proto/

  PROTOC_GEN_TS_PATH="../node_modules/.bin/protoc-gen-ts"

  for x in $(find . -iname "*.proto");
  do
    protoc \
      --proto_path=. \
      --plugin=${PROTOC_GEN_TS_PATH} \
      --ts_out=service=grpc-web:../src/generated\
      --js_out=import_style=commonjs,binary:../src/generated\
      $x;

      echo "Generated grpc code for $x";
  done
  cd ..

  for x in $(find ./src/generated -iname "*.?s");
  do
    sed -i '' "s ../../../validate/validate_pb ../validate/validate_pb g" $x
    sed -i '' "s ../../../common/common_pb ../common/common_pb g" $x
    sed -i '' "s ../../../../v1/management ./ g" $x
  done
}

# --- Environment --------------------------------------------------

IMAGE=ph
CONTAINER=ph_web
CURRENT_BRANCH=${CI_COMMIT_BRANCH:-$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)}

while getopts ":h" optname
  do
    case "$optname" in
      "h")
        print_helper
        ;;
      "?")
        echo "Unknown option $OPTARG"
        exit 0;
        ;;
      ":")
        echo "No argument value for option $OPTARG"
        exit 0;
        ;;
      *)
        echo "Unknown error while processing options"
        exit 0;
        ;;
    esac
  done

shift $(($OPTIND - 1))

# --- Body --------------------------------------------------------
case "$1" in
  "lint"|"l")
    ng lint --fix
  ;;

  "build"|"b")
    throw_not_implemented_error
  ;;

  "test"|"t")
    throw_not_implemented_error
  ;;

  "genproto"|"gp")
    generate_proto_files
    exit 0;
  ;;


  "help"|"h")
    print_helper
  ;;

  *)
    print_helper
    exit 0;
  ;;

esac
# -----------------------------------------------------------------