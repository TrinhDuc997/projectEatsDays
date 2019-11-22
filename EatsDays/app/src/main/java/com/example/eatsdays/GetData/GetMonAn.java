package com.example.eatsdays.GetData;

import com.example.eatsdays.DataBase.ConnectionDB;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GetMonAn {
    Connection connect;
    String ConnectionResult="";
    Boolean isSuc=false;

    //    tạo danh sách
    public List<Map<String,String>>getdata(){
        List<Map<String,String>>data=null;
        data =new ArrayList<Map<String, String>>();

//        kết nối với cơ sở dữ liệu
        try{
            ConnectionDB connectionDB =new ConnectionDB();
            connect = connectionDB.connections();
            if (connect==null){
                ConnectionResult ="Check your Internet";
            }
            else {
                String query="select * from MonAn";
                Statement statement=connect.createStatement();
                ResultSet resultSet=statement.executeQuery(query);

                while (resultSet.next()){
                    Map<String,String> datanum =new HashMap<String, String>();
                    datanum.put("MaMonAn",resultSet.getString("MaMonAn"));
                    datanum.put("TenMonAn",resultSet.getString("TenMonAn"));
                    datanum.put("MaLoai",resultSet.getString("MaLoai"));
                    datanum.put("Kalo",resultSet.getString("Kalo"));
                    datanum.put("Hinh",resultSet.getString("Hinh"));
                    data.add(datanum);
                }
                ConnectionResult="Success";
                isSuc=true;
                connect.close();
            }

        }catch (Exception ex){
            isSuc=false;
            ConnectionResult=ex.getMessage();
        }
        return data;
    }

}
