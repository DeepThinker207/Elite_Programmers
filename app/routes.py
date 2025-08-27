from flask import Blueprint, render_template, redirect, url_for, flash, request

main = Blueprint("main", __name__)

@main.route("/")
def home():
    return render_template("home.html")

@main.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # For now, just flash a message
        flash("Login attempted!", "info")
        return redirect(url_for("main.home"))
    return render_template("login.html")

@main.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        # For now, just flash a message
        flash("Registration attempted!", "success")
        return redirect(url_for("main.home"))
    return render_template("register.html")
