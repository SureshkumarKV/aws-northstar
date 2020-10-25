/** *******************************************************************************************************************
  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
  
  Licensed under the Apache License, Version 2.0 (the "License").
  You may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  
      http://www.apache.org/licenses/LICENSE-2.0
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.                                                                              *
 ******************************************************************************************************************** */

import React, { ReactNode } from 'react';
import { LineChart as Chart } from 'recharts';
import { makeStyles } from '@material-ui/core';
import Heading from '../../components/Heading';
import Stack from '../../layouts/Stack';
import Box from '../../layouts/Box';

import Line from './components/Line';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        width: 'fit-content',
        padding: '10px',
    },
});

/**
 * LineChart properties.
 */
export interface LineChartProps<T extends readonly object[]> {
    /** Title of the chart */
    title?: string;
    /** The width of the chart container in px. */
    width: number;
    /** The height of the chart container in px. */
    height?: number;
    /** The source data, in which each element is an object. [{name: 'a', value: 12, ....}] */
    data: T;
    /** Children to render */
    children: ReactNode;
}

/**
 * Renders a Line chart
 */
function LineChart<T extends readonly object[]>(props: LineChartProps<T>) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Stack>
                {props.title && <Heading variant="h3">{props.title}</Heading>}
                <Chart {...props}>{props.children}</Chart>
            </Stack>
        </Box>
    );
}

export default LineChart;
export { Line };
export { NORTHSTAR_COLORS } from '../../themes';
export {
    Tooltip,
    Legend,
    ReferenceArea,
    ReferenceDot,
    Customized,
    Brush,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Label,
    LabelList,
} from 'recharts';
