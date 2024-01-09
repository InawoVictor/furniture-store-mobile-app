import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'bold',
        fontSize: 40,
    },
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: SIZES.small
    },
    appBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    location: {
        fontFamily: "semibold",
        fontSize: SIZES.medium,
        color: COLORS.gray
    },
    cartCount: {
        position: 'absolute',
        bottom: 16,
        width: 16,
        height: 16,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'green',
        justifyContent: 'center',
        zIndex: 999,
    },
    cartNumber: {
        fontWeight: '600',
        fontFamily: 'regular',
        color: COLORS.lightWhite,
        fontSize: 10,
    },
})

export default styles;