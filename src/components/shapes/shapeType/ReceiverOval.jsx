// ReceiverOval.jsx
import React from 'react';
import { Group, Ellipse, Text } from 'react-konva';
import ContextMenu from '../../menus/ContextMenu';

function ReceiverOval(props) {
    const {
        shapeRef,
        position,
        initialColor,
        showContextMenu,
        contextMenuPosition,
        //isSelected,
        handleOnClick,
        handleRightClick,
        handleDeleteClick,
        handleDragStart,
        handleDragEnd,
        handleHideContextMenu,
        ellipseRadiuses,
        fontSize,
        text,
    } = props;

    const strokeOptions = { color: 'black', strokeWidth: 2 };

    var textAlignment = 4;
    if (text.length > 1) {
        textAlignment = -1;
    }

    return (
        <>
            <Group
                draggable
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onClick={handleOnClick}
                onContextMenu={handleRightClick}
                ref={shapeRef}
                x={position.x}
                y={position.y}
            >
                <Ellipse
                    x={0}
                    y={0}
                    radiusX={ellipseRadiuses.x}
                    radiusY={ellipseRadiuses.y}
                    stroke={strokeOptions.color}
                    strokeWidth={strokeOptions.strokeWidth}
                    fill={initialColor}
                />
                <Text
                    text={text}
                    align="center"
                    x={-ellipseRadiuses.x / 2 + textAlignment}
                    y={-ellipseRadiuses.y / 2 + 1}
                    fill="black"
                    listening={false}
                    fontSize={fontSize}
                />
            </Group>
            {showContextMenu && <ContextMenu position={contextMenuPosition} onDelete={handleDeleteClick} onMouseLeave={handleHideContextMenu} />}
        </>
    );
}

export default ReceiverOval;