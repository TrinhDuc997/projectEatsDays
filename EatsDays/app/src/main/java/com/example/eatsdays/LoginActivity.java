package com.example.eatsdays;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.example.eatsdays.DataBase.ConnectionDB;
import com.example.eatsdays.GetData.Login;

public class LoginActivity extends AppCompatActivity {
    ConnectionDB connectionDB;
    Button btnLogin, btnReg;
    EditText edtUserName, edtPass;
    ProgressBar progressBar;
    private Object ConnectionDB;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        ConnectionDB = new ConnectionDB();
        edtUserName = (EditText) findViewById(R.id.Username);
        edtPass = (EditText) findViewById(R.id.Pass);
        btnLogin = (Button) findViewById(R.id.btn_login);
        progressBar=(ProgressBar) findViewById(R.id.progress);
        progressBar.setVisibility(View.GONE);


        btnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                String username = edtUserName.getText().toString();
                String password = edtPass.getText().toString();
                Login login = null;
                login = new Login();

                String z = login.Login(username, password);
                //chuyển đổi activity
                if (username.trim().equals("") || password.trim().equals("")) {
                    z = "Vui lòng nhập tài khoản và mật khẩu.";

                } else if (username == username.toString() && password == password.toString()) {
                    Intent intent = new Intent(LoginActivity.this, MainActivity.class);
                    startActivity(intent);
                    Toast.makeText(LoginActivity.this, z, Toast.LENGTH_SHORT).show();
                } else {
                    z="sai tài khoản hoặc mật khẩu";
                }
            }

        });
    }
}
