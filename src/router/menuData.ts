import { MenuItem } from "primereact/menuitem";

export const items: MenuItem[] = [
    {
        label: 'Upload',
        icon: 'pi pi-fw pi-video',
        url: 'upload'
    },
    {
        label: 'Form', icon: 'pi pi-fw pi-calendar',
        url: 'form'
    },
    {
        label: "Editor",
        icon: "pi pi-fw pi-th-large",
        url: "editor",
    },
    {
        label: 'Chart',
        icon: 'pi pi-fw pi-video',
        url: 'chart'
    },
    {
        label: "Table",
        icon: "pi pi-fw pi-table",
        url: "table",
    },
    {
        label: "Step",
        icon: "pi pi-fw pi-table",
        url: "step",
    },
    {
        label: 'Settings', icon: 'pi pi-fw pi-cog',
        items: [
            [
                {
                    label: 'Setting 1',
                    items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                },
                {
                    label: 'Setting 2',
                    items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                },
                {
                    label: 'Setting 3',
                    items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                }
            ],
            [
                {
                    label: 'Technology 4',
                    items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                }
            ]
        ]
    }
];
