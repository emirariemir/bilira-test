import { View, Text, StyleSheet } from 'react-native';
import React, { forwardRef, useCallback, useMemo, useRef } from 'react';
import { BottomSheetModal, BottomSheetView, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const CustomBottomSheetModal = () => {
    const snapPoints = useMemo(() => ['25%', '50%'], []);
    
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    return (
        <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints}>
            <BottomSheetView style={sheetStyles.container}>
                <Text>This is a Bottom Sheet!</Text>
            </BottomSheetView>
        </BottomSheetModal>
    )
}

const sheetStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});

export default CustomBottomSheetModal;