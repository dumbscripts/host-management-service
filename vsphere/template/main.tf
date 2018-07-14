
# Vsphere server details
provider "vsphere" {
    user = "${var.vm_user}"
    password = "${var.vm_password}"
    vsphere_server = "${var.vm_host}"
    allow_unverified_ssl = false
}

# Build a VM
resource "vsphere_virtual_machine" "VM_01" {
  name   = "${var.vm_name}"
  num_cpus   = "${var.vm_cpu}"
  memory = "${var.vm_memory}"

  resource_pool_id {}

  datastore_id {}

  disk {}

  network_interface {
    label = "VM Network"
  }

}