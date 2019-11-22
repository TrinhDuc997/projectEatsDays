package com.example.eatsdays.GetData;

import com.example.eatsdays.DataBase.ConnectionDB;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

public class Login {
    ConnectionDB connection = new ConnectionDB();
    String z = "";
    Connection con = connection.connections();


    public String Login(String username,String password) {
        try {
            if (con == null) {
                z = "Error in connetion with SQL server";
            } else {
                String query = "select * from User where Taikhoan='" + username.toString() + "' and Matkhau='" + password.toString() + "'";
                Statement statement = con.createStatement();
                ResultSet resultSet = statement.executeQuery(query);

                if (resultSet.next()) {
                    z = "Đăng nhập thành công";
                } else {
                    z = "Sai tài khoản hoặc mật khẩu";
                }
            }
        } catch (Exception ex) {
            z = "Ex";
        }
        return z;
    }
}
