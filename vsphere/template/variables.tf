
# variables file which defines all the variables used

variable "vm_user" {
    type = "string"
}

variable "vm_password" {
    type = "string"
}

variable "vm_host" {
    type = "string"
}

variable "vm_hostname" {
    type = "string"
}

variable "vm_name" {
    type = "string"
}

variable vm_cpu {
    type = "string"
    default = "4"
}

variable vm_memory {
    type = "string"
    default = "4096"
}