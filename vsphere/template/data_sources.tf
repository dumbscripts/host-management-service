
data "vsphere_datacenter" "exsi1" {
  name = "exsi1"
}

data "vsphere_datastore" "exsi1_datastore" {
  name          = "exsi1_datastore"
  datacenter_id = "${ data.vsphere_datacenter.exsi1.id }"
}

data "vsphere_resource_pool" "exsi1_resource_pool" {
  name          = "exsi1/Resources"
  datacenter_id = "${ data.vsphere_datacenter.exsi1.id }"
}

data "vsphere_virtual_machine" "base_linux" {
  name          = "base_linux"
  datacenter_id = "${ data.vsphere_datacenter.exsi1.id }"
}

data "vsphere_network" "vm_network" {
  name          = "VM Network"
  datacenter_id = "${ data.vsphere_datacenter.exsi1.id }"
}

