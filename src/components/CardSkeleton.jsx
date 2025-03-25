import React from 'react'
import { Card, CardHeader, CardBody, Typography, CardFooter, Button } from '@material-tailwind/react';
const CardSkeleton = () => {
    return (
        <Card className="mt-6 w-full animate-pulse">
            <CardHeader
                shadow={false}
                floated={false}
                className="relative grid h-56 place-items-center bg-gray-300"
            >
            </CardHeader>
            <CardBody>
                <Typography
                    as="div"
                    variant="h1"
                    className="mb-4 h-3 full rounded-full bg-gray-300"
                >
                    &nbsp;
                </Typography>
                <Typography
                    as="div"
                    variant="paragraph"
                    className="mb-2 h-2 w-full rounded-full bg-gray-300"
                >
                    &nbsp;
                </Typography>
                <Typography
                    as="div"
                    variant="paragraph"
                    className="mb-2 h-2 w-full rounded-full bg-gray-300"
                >
                    &nbsp;
                </Typography>
                <Typography
                    as="div"
                    variant="paragraph"
                    className="mb-2 h-2 w-full rounded-full bg-gray-300"
                >
                    &nbsp;
                </Typography>
                <Typography
                    as="div"
                    variant="paragraph"
                    className="mb-2 h-2 w-full rounded-full bg-gray-300"
                >
                    &nbsp;
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button
                    disabled
                    tabIndex={-1}
                    className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                >
                    &nbsp;
                </Button>
            </CardFooter>
        </Card>
    )
}

export default CardSkeleton