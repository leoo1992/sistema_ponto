import { UserTableStory } from "./UserTableStory";

// @ts-ignore
const Template = (args) => <UserTableStory {...args} />;
export const UserTable = Template.bind({});
// @ts-ignore
UserTable.parameters = { controls: { include: ["foo", "bar"] } };
// @ts-ignore
UserTable.args = {
  selectableRows: true,
  selectableRowsNoSelectAll: false,
  selectableRowsVisibleOnly: false,
  selectableRowsHighlight: false,
  selectableRowsSingle: false,
  expandableRows: false,
  expandOnRowClicked: false,
  expandOnRowDoubleClicked: false,
  expandableRowsHideExpander: false,
  pagination: true,
  highlightOnHover: false,
  striped: false,
  pointerOnHover: false,
  dense: false,
  persistTableHead: false,
  noHeader: false,
  fixedHeader: false,
  fixedHeaderScrollHeight: "300px",
  progressPending: false,
  noTableHead: false,
  noContextMenu: false,
  subHeader: false,
  subHeaderWrap: true,
  responsive: true,
  disabled: false,
  ProgressComponent: "",
  paginationComponent: "",
  paginationRowsPerPageOptions: [5, 10, 15],
  onSelectedRowsChange: "",
  contextActions: "",
};

export default {
  title: "Getting Started/Kitchen Sink",
  component: UserTable,
  parameters: {
    controls: {
      sort: "requiredFirst",
    },
  },
  argTypes: {
    selectableRows: {
      table: {
        category: "Selectable Rows",
      },
    },
    selectableRowsNoSelectAll: {
      table: {
        category: "Selectable Rows",
      },
    },
    selectableRowsVisibleOnly: {
      table: {
        category: "Selectable Rows",
      },
    },
    selectableRowsHighlight: {
      table: {
        category: "Selectable Rows",
      },
    },
    selectableRowsSingle: {
      table: {
        category: "Selectable Rows",
      },
    },
    expandableRows: {
      table: {
        category: "Expandable Rows",
      },
    },
    expandOnRowClicked: {
      table: {
        category: "Expandable Rows",
      },
    },
    expandOnRowDoubleClicked: {
      table: {
        category: "Expandable Rows",
      },
    },
    expandableRowsHideExpander: {
      table: {
        category: "Expandable Rows",
      },
    },
    subHeaderAlign: {
      control: { type: "select" },
    },
    direction: {
      control: { type: "select" },
    },
    selectableRowsRadio: {
      options: ["radio", "checkbox"],
      control: { type: "select" },
      table: {
        category: "Selectable Rows",
      },
    },
  },
};
