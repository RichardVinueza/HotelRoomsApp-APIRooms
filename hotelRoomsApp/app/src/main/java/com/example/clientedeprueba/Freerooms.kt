package com.example.clientedeprueba

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.android.volley.Request
import com.android.volley.Response
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import kotlinx.android.synthetic.main.content_main.*

class Freerooms : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_freerooms)

        requestToServerAvailableRooms()
    }


    private fun requestToServerAvailableRooms(){
        // Instantiate the RequestQueue with the cache and network. Start the queue.
        val queue = Volley.newRequestQueue(this)


        val url = "http://192.168.103.44:40000/error"

        val jsonObjectRequest = JsonObjectRequest(
            Request.Method.GET, url, null,
            Response.Listener { response ->
                textViewMessage.text = "%s".format(response.get("error").toString())
            },
            Response.ErrorListener { error ->
                // TODO: Handle error
            }
        )
        queue.add(jsonObjectRequest)

    }
}
