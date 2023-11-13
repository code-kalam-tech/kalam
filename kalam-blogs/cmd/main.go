package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type Response struct {
	Message string `json:"message"`
}

func Hello(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Request Received....")

	response := Response{Message: "We're working hard to bring you something amazing. Stay tuned!"}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	err := json.NewEncoder(w).Encode(response)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func main() {

	r := mux.NewRouter()
	r.HandleFunc("/", Hello).Methods("GET")

	fmt.Println("Server started..")
	log.Fatal(http.ListenAndServe(":8998", r))
}
