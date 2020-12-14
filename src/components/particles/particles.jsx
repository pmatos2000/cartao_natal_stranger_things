import Particles from "react-particles-js";

const _Particles = () => {
    return (
        <Particles
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
            }}
            params={{
                particles: {
                    number: {
                        value: 160,
                        density: {
                            enable: false
                        }
                    },
                    size: {
                        value: 10,
                        random: true,
                        anim: {
                            speed: 4,
                            size_min: 0.3
                        }
                    },
                    line_linked: {
                        enable: false
                    },
                    move: {
                        random: true,
                        speed: 2,
                        out_mode: "out"
                    }
                },
            }} />
    );
}

export default _Particles;