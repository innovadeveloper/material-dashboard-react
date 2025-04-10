import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const DialogSmall = ({size = "xs", handleOpen, isOpen}) => 
    <Dialog open={isOpen} size={size} handler={handleOpen}>
        <DialogHeader>Atención</DialogHeader>
        <DialogBody>
            Estás seguro de eliminar el componente....
        </DialogBody>
        <DialogFooter>
            <Button
                variant="text"
                color="red"
                onClick={() => handleOpen(false)}
                className="mr-1"
            >
                <span>Cancelar</span>
            </Button>
            <Button
                variant="gradient"
                color="green"
                onClick={() => handleOpen(true)}
            >
                <span>Confirm</span>
            </Button>
        </DialogFooter>
    </Dialog>


const DialogSize = () => {
    const [size, setSize] = React.useState(null);

    const handleOpen = (value) => setSize(value);

    return (
        <>
            <div className="mb-3 flex gap-3">
                <Button onClick={() => handleOpen("xs")} variant="gradient">
                    Open Modal XS
                </Button>
                <Button onClick={() => handleOpen("sm")} variant="gradient">
                    Open Modal SM
                </Button>
                <Button onClick={() => handleOpen("md")} variant="gradient">
                    Open Modal MD
                </Button>
            </div>
            <div className="flex gap-3">
                <Button onClick={() => handleOpen("lg")} variant="gradient">
                    Open Modal LG
                </Button>
                <Button onClick={() => handleOpen("xl")} variant="gradient">
                    Open Modal XL
                </Button>
                <Button onClick={() => handleOpen("xxl")} variant="gradient">
                    Open Modal XXL
                </Button>
            </div>
            <Dialog
                open={
                    size === "xs" ||
                    size === "sm" ||
                    size === "md" ||
                    size === "lg" ||
                    size === "xl" ||
                    size === "xxl"
                }
                size={size || "md"}
                handler={handleOpen}
            >
                <DialogHeader>Its a simple modal.</DialogHeader>
                <DialogBody>
                    The key to more success is to have a lot of pillows. Put it this way,
                    it took me twenty five years to get these plants, twenty five years of
                    blood sweat and tears, and I&apos;m never giving up, I&apos;m just
                    getting started. I&apos;m up to something. Fan luv.
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={() => handleOpen(null)}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={() => handleOpen(null)}
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}

// export default DialogSize;
export { DialogSmall }