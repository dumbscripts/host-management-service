
# Vsphere server details
provider "vsphere" {
    user = "${ var.vm_user }"
    password = "${ var.vm_password }"
    vsphere_server = "${ var.vm_host }"
    allow_unverified_ssl = false
}

# Build a VM
resource "vsphere_virtual_machine" "VM_01" {
  name   = "${ var.vm_name }"
  num_cpus = "${ var.vm_cpu }"
  memory = "${ var.vm_memory }"

  resource_pool_id = "${ data.vsphere_resource_pool.exsi1_resource_pool.id }"
  datastore_id = "${ data.vsphere_datastore.exsi1_datastore.id }"

  disk {
    label = "x.vmdk"
    thin_provisioned = true
  }

  network_interface {
    network_id   = "${ data.vsphere_network.vm_network.id }"
  }

  clone {
    template_uuid = "${ data.vsphere_virtual_machine.base_linux.id }"

    customize {
       linux_options {
         host_name = "${ var.vm_hostname }"
         domain    = "corp.local"
        }
    }
  }

}

# Outputs
//value = "${vsphere_virtual_machine.vm.clone.0.customize.0.network_interface.0.ipv4_address}"
output "ip" { value = "${vsphere_virtual_machine.VM_01.default_ip_address}" }
