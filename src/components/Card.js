import React, { useEffect, useState } from 'react'
import { Avatar, Stack, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Window from './Window'

const Task = () => {
    const [open, setOpen] = useState(false);

    const [rColor, setRColor] = useState();
    function randomColor() {
        let hex = Math.floor(Math.random() * 0xFFFFFF);
        let color = "#" + hex.toString(16);

        return color;
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        setRColor(randomColor());
    }, []);
    const titleStyle = { position: 'absolute', left: '26px', right: '26px', top: '-12px', alignText: 'center' };
    const avatarStyle = { position: 'absolute', left: '-7px', top: '-8px', bgcolor: rColor, width: 24, height: 24, mb: 12 };
    const delBtnStyl = { position: 'absolute', right: '-32px', top: '-15px', color: rColor };

    return (
        <div className='card'>
            <Card sx={{ minWidth: 200, minheight: 190 }}>
                <CardContent>
                    <Stack sx={{ position: 'relative', mb: 6 }} direction='row'>
                        <Avatar sx={avatarStyle}>N</Avatar>
                        <Typography variant="h6" align="center" sx={titleStyle}>
                            benevolent jgkdfjg freer
                        </Typography>
                        <Button size="small" sx={delBtnStyl}> <DeleteIcon /> </Button>
                    </Stack>
                    <Typography sx={{ pl: 3, pr: -2 }} variant="body2">
                        well meaning and kindly sdfjlksdjf jslkdfj  jsdf sjgh lkjdf  lorem  kdsfkj sd
                    </Typography>
                </CardContent>
                <CardActions sx={{ position: 'relative'}}>
                    <Button
                        variant='outlined'
                        onClick={handleClickOpen}
                        size="small" sx={{position: 'absolute', left: 0, top: 3 }}>Edit</Button>
                </CardActions>
            </Card>
            <Window close={handleClose} open={open} />
        </div>
    )
}

export default Task
