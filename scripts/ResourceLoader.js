"use strict";

function ResourceLoader() {
    let self = this;
    let images = {
        spaceships: {
            full: {
                spaceship_blue: {
                    src: "/images/spaceships/full/spaceship_blue.png",
                    img: null
                },
                spaceship_green: {
                    src: "/images/spaceships/full/spaceship_green.png",
                    img: null
                },
                spaceship_orange: {
                    src: "/images/spaceships/full/spaceship_orange.png",
                    img: null
                }
            },
            parts: {
                part_1: {
                    src: "/images/spaceships/parts/part_1.png",
                    img: null
                },
                part_2: {
                    src: "/images/spaceships/parts/part_2.png",
                    img: null
                },
                part_3: {
                    src: "/images/spaceships/parts/part_3.png",
                    img: null
                }
            }
        },
        ufos: {
            ufo_blue: {
                src: "/images/ufos/ufo_blue.png",
                img: null
            },
            ufo_green: {
                src: "/images/ufos/ufo_green.png",
                img: null
            },
            ufo_red: {
                src: "/images/ufos/ufo_red.png",
                img: null
            },
        },
        asteroids: {
            large: {
                asteroid_large_1: {
                    src: "/images/asteroids/large/asteroid_large_1.png",
                    img: null
                },
                asteroid_large_2: {
                    src: "/images/asteroids/large/asteroid_large_2.png",
                    img: null
                },
                asteroid_large_3: {
                    src: "/images/asteroids/large/asteroid_large_3.png",
                    img: null
                }
            },
            medium: {
                asteroid_medium_1: {
                    src: "/images/asteroids/medium/asteroid_medium_1.png",
                    img: null
                },
                asteroid_medium_2: {
                    src: "/images/asteroids/medium/asteroid_medium_2.png",
                    img: null
                },
                asteroid_medium_3: {
                    src: "/images/asteroids/medium/asteroid_medium_3.png",
                    img: null
                }
            },
            small: {
                asteroid_small_1: {
                    src: "/images/asteroids/small/asteroid_small_1.png",
                    img: null
                },
                asteroid_small_2: {
                    src: "/images/asteroids/small/asteroid_small_2.png",
                    img: null
                }
            }
        },
        effects: {
            explosions: {
                explosion_1: {
                    src: "/images/effects/explosions/explosion_1.png",
                    img: null
                },
                explosion_2: {
                    src: "/images/effects/explosions/explosion_2.png",
                    img: null
                },
                explosion_3: {
                    src: "/images/effects/explosions/explosion_3.png",
                    img: null
                }
            },
            fire: {
                fire_1: {
                    src: "/images/effects/fire/fire_1.png",
                    img: null
                },
                fire_2: {
                    src: "/images/effects/fire/fire_2.png",
                    img: null
                },
                fire_3: {
                    src: "/images/effects/fire/fire_3.png",
                    img: null
                }
            },
            lasers: {
                blue: {
                    laser_blue_1: {
                        src: "/images/effects/lasers/blue/laser_blue_1.png",
                        img: null
                    },
                    laser_blue_2: {
                        src: "/images/effects/lasers/blue/laser_blue_2.png",
                        img: null
                    },
                    laser_blue_3: {
                        src: "/images/effects/lasers/blue/laser_blue_3.png",
                        img: null
                    }
                },
                green: {
                    laser_green_1: {
                        src: "/images/effects/lasers/green/laser_green_1.png",
                        img: null
                    },
                    laser_green_2: {
                        src: "/images/effects/lasers/green/laser_green_2.png",
                        img: null
                    },
                    laser_green_3: {
                        src: "/images/effects/lasers/green/laser_green_3.png",
                        img: null
                    }
                },
                red: {
                    laser_red_1: {
                        src: "/images/effects/lasers/red/laser_red_1.png",
                        img: null
                    },
                    laser_red_2: {
                        src: "/images/effects/lasers/red/laser_red_2.png",
                        img: null
                    },
                    laser_red_3: {
                        src: "/images/effects/lasers/red/laser_red_3.png",
                        img: null
                    }
                }
            },
            smoke: {
                smoke_1: {
                    src: "/images/effects/smoke/smoke_1.png",
                    img: null
                },
                smoke_2: {
                    src: "/images/effects/smoke/smoke_2.png",
                    img: null
                },
                smoke_3: {
                    src: "/images/effects/smoke/smoke_3.png",
                    img: null
                }
            },

        }
    };

    self.getImages=function (){
         return images;
    }

    let loadImage = function (src) {
        return new Promise(function (resolve, reject) {
            let image = document.createElement("img");
            image.src = src;

            image.onload = () => resolve(image);
            image.onerror = () => reject(new Error(`Ошибка загрузки изображения ${image}`));
        });
    }

    let loadAllImages = function (array) {
        for (let key in array) {
            if ("src" in array[key]) {
                loadImage(array[key].src)
                    .then(result => {
                        array[key].img = result;
                    }, reject => console.log(reject));
            } else {
                loadAllImages(array[key]);
            }
        }
    }

    let loadResources = function () {
        loadAllImages(images);
    }

//     audio: {},
//     high_scores: {}
// };

    loadResources();
}
