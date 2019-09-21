package com.example.clientedeprueba

import android.content.Intent
import android.os.Bundle
import com.google.android.material.snackbar.Snackbar
import androidx.appcompat.app.AppCompatActivity
import com.android.volley.Request
import com.android.volley.Response
import com.android.volley.toolbox.JsonArrayRequest
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley

import kotlinx.android.synthetic.main.activity_second.*
import kotlinx.android.synthetic.main.content_main.*
import kotlinx.android.synthetic.main.content_second.*

class Account : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_second)
        setSupportActionBar(toolbar)

        fab.setOnClickListener { view ->
            Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                .setAction("Action", null).show()
        }
        supportActionBar?.setDisplayHomeAsUpEnabled(true)


        buttonAvailableRooms.setOnClickListener {
            var intent = Intent(this, Freerooms::class.java)
            startActivity(intent)
        }

        requestToServer()

    }

    private fun requestToServer(){
        // Instantiate the RequestQueue with the cache and network. Start the queue.
        val queue = Volley.newRequestQueue(this)


        val url2 = "http://192.168.103.44:40000/listRooms"

        val jsonArrayRequest = JsonArrayRequest(
            Request.Method.GET, url2, null,
            Response.Listener { response ->
                hotelrooms.text = "%s".format(response.toString())
            },
            Response.ErrorListener { error ->
                // TODO: Handle error
            }
        )
        queue.add(jsonArrayRequest)

    }






}
