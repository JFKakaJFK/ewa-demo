handler() {
  x = $(( RANDOM % 101 ))
  y = $(( RANDOM % 101 ))

  echo `{"x":$x,"y":$y}`
}
