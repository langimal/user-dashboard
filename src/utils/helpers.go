package userdashboard

import (
	"fmt"
	"strings"
	"time"
)

type User struct {
	ID       string    `json:"id"`
	Username string    `json:"username"`
	Email    string    `json:"email"`
	Created  time.Time `json:"created"`
}

type DashboardData struct {
	Users    []User    `json:"users"`
	Username string    `json:"username"`
	Email    string    `json:"email"`
	Created  time.Time `json:"created"`
}

func GetUsername(username string) string {
	return strings.TrimSpace(username)
}

func GetUser(user *User) (*DashboardData, error) {
	if user == nil {
		return nil, fmt.Errorf("user is nil")
	}

	if user.Username == "" || user.Email == "" || user.ID == "" {
		return nil, fmt.Errorf("invalid user data")
	}

	data := &DashboardData{
		Users:    []User{*user},
		Username: user.Username,
		Email:    user.Email,
		Created:  user.Created,
	}

	return data, nil
}