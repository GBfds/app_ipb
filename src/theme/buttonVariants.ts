import spacing from "./spacing"

const buttonVariants ={
    defaults:{
        width: spacing.window * 0.8,
        height: 56,
        alignItems: "center",
        justifyContent: "center",
    },
    medium:{
        width: spacing.window * 0.5,
    },
    largeWithIcon:{
        width: spacing.window * 0.9,
        flexDirection: "row"
    },
    LargeAlignStart:{
        width: "100%",
        alignItems: "flex-start",
        paddingHorizontal: "x",
        height: 46,
        textAlign: "center",
    },
    LargeAlignEnd:{
        width: "100%",
        alignItems: "flex-end",
        paddingHorizontal: "x",
        height: 46,
        textAlign: "center",
    },
    ListSmall:{
        width: spacing.window * 0.16,
        height: 60,
        textAlign: "center",
    },
    transparent:{
        width: spacing.window * 0.8,
        height: 56,
    }
}

export default buttonVariants