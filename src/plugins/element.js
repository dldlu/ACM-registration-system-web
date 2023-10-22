import Vue from 'vue'
import {
    Message,
    MessageBox,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Row,
    Col,
    Steps,
    Step,
    Button,
    Checkbox,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    Table,
    TableColumn,
    Loading,
} from 'element-ui'
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Row);
Vue.use(Col);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Loading.directive);
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$loading = Loading.service;
