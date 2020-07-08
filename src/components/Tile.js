/** @jsx jsx */
import { jsx, Box, Text, Image, useColorMode } from "theme-ui"

const Tile = ({ title, img, author, slug }) => {
    // const [colorMode, setColorMode] = useColorMode();

    return(
        <Box
        onClick = {() => window.location.href = `${slug}`}
        sx = {{
            width: '100%',
            height: ['fit-content', '300px'],
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            bg: 'white',
            p: [3,4],
            borderRadius: '6',
            color: 'black',
            mb: [20, 140],
            backgroundColor: "white",
            cursor: 'pointer',
        }}>
            <Text
                sx = {{
                    mb: '15px',
                    fontFamily: "'Noto Serif JP', sans-serif",
                    fontWeight: "600",
                    fontSize: [2, 3],
                }}>
                    {title}
            </Text>
            <Text
                sx = {{
                    mb: '10px',
                    fontFamily: "'Noto Serif JP', sans-serif",
                    fontWeight: "400",
                    fontSize: [1, 2],
                }}>
                    By {author}
            </Text>
            <Image src = {img}
                    sx = {{
                        width: ['350px', '100%'],
                        height: ['210px', '250px'],
                        borderRadius: '20',
                        ml: [0, '10px'],
                        transition: '0.2s',
                        cursor: 'pointer',
                    }}
                    />
        </Box>
    )
}

export default Tile