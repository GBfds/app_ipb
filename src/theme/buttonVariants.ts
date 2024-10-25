import spacing from "./spacing"

const buttonVariants ={
    defaults:{
        width: spacing.window * 0.8,
        height: 56,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    medium:{
        width: spacing.window * 0.5,
        backgroundColor: "green_800",
        margin: "x",
    },
    largeWithIcon:{
        width: spacing.window * 0.9,
        margin: "x",
        flexDirection: "row"
    },
    ListLarge:{
        width: "100%",
        alignItems: "flex-start",
        padding: "m",
        height: 45,
        marginVertical: "m",
        textAlign: "center",
        backgroundColor: "gray",
    },
    ListSmall:{
        width: spacing.window * 0.18,
        padding: "m",
        height: 60,
        marginVertical: "m",
        textAlign: "center",
        backgroundColor: "gray",
    },
    transparent:{
        width: spacing.window * 0.8,
        height: 56,
    }
}

export default buttonVariants