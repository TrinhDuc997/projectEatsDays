package com.example.eatsdays.DataBase;

import android.annotation.SuppressLint;
import android.os.StrictMode;
import android.util.Log;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLDataException;

public class ConnectionDB {
    String IP, DB, DBUsername, DBPass,classs;
    //    phương thức có trong API
    @SuppressLint("NewApi")
//    tạo chuỗi kết nối
    public Connection connections(){
        classs ="net.sourceforge.jtds.jdbc.Driver";
        IP = "192.168.10.25";
        DB = "QlyBuaAn";
        DBUsername = "abc";
        DBPass = "1234";
//Tạo chính sách để kết nối với ổ đĩa vậy lý
        StrictMode.ThreadPolicy policy=new StrictMode.ThreadPolicy.Builder().permitAll().build();
        StrictMode.setThreadPolicy(policy);
        java.sql.Connection connection=null;
        String ConURL=null;

        try{Class.forName(classs);
            ConURL = "jdbc:jtds:sqlserver://" + IP + ";"
                    + "databaseName=" + DB + ";user=" + DBUsername + ";password="
                    + DBPass + ";";
            connection = DriverManager.getConnection(ConURL);
        }catch (SQLDataException se){
            Log.e("Error",se.getMessage());
        }
        catch (ClassNotFoundException e){
            Log.e("eroor from class",e.getMessage());
        }
        catch (Exception ex){
            Log.e("Eroor Ex",ex.getMessage());
        }

        return connection;
    }
}
