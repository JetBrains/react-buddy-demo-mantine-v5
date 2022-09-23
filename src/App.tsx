import './App.css'
import {
    Grid,
    SimpleGrid,
    Text,
    Center,
    Navbar,
    Header,
    AppShell,
    Container,
    MediaQuery,
    CheckIcon,
    ActionIcon,
    Group,
    Image,
    AspectRatio,
    Autocomplete,
    ColorPicker,
    ColorInput,
    Select,
    Anchor,
    Pagination,
    Tabs,
    Badge,
    ColorSwatch,
    NavLink,
    BackgroundImage,
    Dialog,
    Drawer,
    Button,
    HoverCard,
    Menu,
    LoadingOverlay,
    Modal,
    Overlay,
    Popover,
    TextInput,
    Code,
    Stepper,
    Progress,
    Skeleton,
    Collapse,
    Divider,
    Transition,
    Paper,
    Breadcrumbs,
    Tooltip,
    Burger, Checkbox, NumberInput
} from "@mantine/core";
import React, {ReactNode, useEffect, useState} from "react";
import {MantineTransition, MantineTransitionName} from "@mantine/core/lib/Transition/transitions";
import {useForm} from "@mantine/form";

function App() {


    return (
        <div className="App">

            <Popover width="target" position="bottom" withArrow shadow="md">
                <Popover.Target>
                    <Button sx={{width: 280}}>Toggle popover</Button>
                </Popover.Target>
                <Popover.Dropdown>
                    Content
                </Popover.Dropdown>
            </Popover>
        </div>
    )
}

export default App
