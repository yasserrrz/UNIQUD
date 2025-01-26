/*************  ✨ Codeium Command ⭐  *************/
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";

const UserTable = ({ users }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
/******  935646a5-dcbd-4ce8-a108-52e9120bd579  *******/