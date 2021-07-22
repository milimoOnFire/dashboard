import React, {FunctionComponent, useState} from 'react';
import GridLayout from 'react-grid-layout';
import '../../node_modules/react-grid-layout/css/styles.css'
import '../../node_modules/react-resizable/css/styles.css'
import ChartPie from "../components/ChartPie";
import {Button, Paper} from "@material-ui/core";


const DashboardBuilder: FunctionComponent<{}> = (props) => {
    const [layout, setLayout] = useState<any>(
        [
            {i: 'a', x: 0, y: 0, w: 5, h: 2, minW: 2, minH: 2, component: 'ChartPie'},
            {i: 'b', x: 1, y: 0, w: 3, h: 5, minW: 5, maxW: 6, minH: 2, component: 'ChartPie'},
            {i: 'c', x: 4, y: 0, w: 2, h: 5, minW: 2, maxW: 4, minH: 2, component: 'ChartPie'}
            ]
    )
    const handleAdd = () => {
        const layoutClone = JSON.parse(JSON.stringify(layout))
        console.log(layoutClone)
        setLayout(
            [...layoutClone, {
                i: String(Math.random()),
                x: 4,
                y: 0,
                w: 1,
                h: 2,
                minW: 2,
                minH: 2,
                component: 'ChartPie'
            }]
        )
    }
    const layoutChange = () =>{

    }
    const Components = [<ChartPie />, <ChartPie />, <ChartPie />]
    return (
        <>
            <Button onClick={handleAdd}>add</Button>
            <GridLayout
                className="layout"
                cols={12}
                rowHeight={30}
                width={1200}
                layout={layout}
                onLayoutChange={layoutChange}
            >
                {layout.map((Element: any, index: number) =>
                    <Paper key={Element.i}>
                        <ChartPie />
                    </Paper>
                )}
            </GridLayout>
        </>
    )
}

export default DashboardBuilder;
