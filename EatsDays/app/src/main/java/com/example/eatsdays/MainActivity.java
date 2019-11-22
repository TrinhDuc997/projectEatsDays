package com.example.eatsdays;

import android.graphics.Bitmap;
import android.os.Bundle;
import android.widget.ImageView;
import android.widget.SimpleAdapter;
import android.widget.TextView;
import android.widget.Toolbar;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.RecyclerView;

public class MainActivity extends AppCompatActivity {
    ImageView imghinh;
//    GridView gvdata;
    SimpleAdapter AD;
    Bitmap bitmap;
//    Toolbar toolbar;
    TextView textView;
    RecyclerView recyclerView;

//    Button btnget;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        imghinh = (ImageView) findViewById(R.id.hinhanh);
//        gvdata = (GridView) findViewById(R.id.gvmonan);
//        toolbar =(Toolbar) findViewById(R.id.toobartrangchinh);
        textView = (TextView) findViewById(R.id.txtsanphamhaydung);
        recyclerView=(RecyclerView) findViewById(R.id.gvmonan);
//        btnget=(Button) findViewById(R.id.btngetdata);
//        btnget.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View view) {
//
//            }
//        });
//        List<Map<String, String>> MydataList = null;
//        GetMonAn myData = new GetMonAn();
//        MydataList = myData.getdata();
//
//
//
//        String[] fromwhere = {"MaMonAn", "TenMonAn", "MaLoai", "Kalo", "Hinh"};
//
//        int[] viewwhere = {R.id.txtID, R.id.txtTen, R.id.txtLoai, R.id.txtCalo, R.id.hinhanh};
//        AD = new SimpleAdapter(MainActivity.this, MydataList, R.layout.loaimonan, fromwhere, viewwhere);
//        gvdata.setAdapter(AD);

//        AnhXa();

//        adapter = new HinhAnhAdapter(this,R.layout.hinhanh,arrayhinh);
//        gvHinh.setAdapter(adapter);
    }

//    private void AnhXa() {
////        gvHinh = (GridView) findViewById(R.id.gridviewhinh);
////        arrayhinh = new ArrayList<>();
////        arrayhinh.add(new Hinh("Hình", R.drawable.comchien));
////        arrayhinh.add(new Hinh("Hình2",R.drawable.frut));
////        arrayhinh.add(new Hinh("Hình3",R.drawable.hutiu));
////        arrayhinh.add(new Hinh("Hình", R.drawable.pho));
////        arrayhinh.add(new Hinh("Hình2",R.drawable.trungopla));
////        arrayhinh.add(new Hinh("Hình3",R.drawable.wholecrab));
//    }
}
