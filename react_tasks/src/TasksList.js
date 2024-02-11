import {Datagrid, List, Filter, SelectInput , ReferenceField, TextField,  DateInput, Edit, ReferenceInput, SimpleForm, TextInput, useRecordContext } from 'react-admin';

const PostTitle = () => {
  const record = useRecordContext();
  return record ? (<span>Tasks{`"${record.name}"`}</span>) : null
}

const PostFilter = (props) => <Filter {...props}>
  <TextInput label="Search" source="nome" alwaysOn />
</Filter >

export const TasksList = (props) => (
  <List filters={<PostFilter />} {...props}>
      <Datagrid rowClick="edit">
          <TextField source="TaskID" />
          <TextField source="Title" />
          <TextField source="Description" />
          <TextField source="DueDate" />
          <ReferenceField source="UserID" reference="Users" />
          <ReferenceField source="CategoryID" reference="TaskCategories" />
          <ReferenceField source="StatusID" reference="TaskStatus" />
      </Datagrid>
  </List>
);


export const TasksEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
        <TextField source="StatusID" />
          <TextField source="StatusName" />
        </SimpleForm>
    </Edit>
);