import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management Android Managed App Protections Has Payload Links",
					"value": "Device App Management Android Managed App Protections Has Payload Links",
					"action": "Invoke action hasPayloadLinks",
					"description": "Invoke action hasPayloadLinks",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/androidManagedAppProtections/microsoft.graph.hasPayloadLinks"
						}
					}
				},
				{
					"name": "Device App Management Device App Management Tasks Device App Management Task Update Status",
					"value": "Device App Management Device App Management Tasks Device App Management Task Update Status",
					"action": "Invoke action updateStatus",
					"description": "Set the task's status and attach a note.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/deviceAppManagementTasks/{{$parameter[\"deviceAppManagementTask-id\"]}}/microsoft.graph.updateStatus"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations Has Payload Links",
					"value": "Device App Management Ios Lob App Provisioning Configurations Has Payload Links",
					"action": "Invoke action hasPayloadLinks",
					"description": "Invoke action hasPayloadLinks",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/microsoft.graph.hasPayloadLinks"
						}
					}
				},
				{
					"name": "Device App Management Ios Lob App Provisioning Configurations Ios Lob App Provisioning Configuration Assign",
					"value": "Device App Management Ios Lob App Provisioning Configurations Ios Lob App Provisioning Configuration Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/iosLobAppProvisioningConfigurations/{{$parameter[\"iosLobAppProvisioningConfiguration-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device App Management Ios Managed App Protections Has Payload Links",
					"value": "Device App Management Ios Managed App Protections Has Payload Links",
					"action": "Invoke action hasPayloadLinks",
					"description": "Invoke action hasPayloadLinks",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/iosManagedAppProtections/microsoft.graph.hasPayloadLinks"
						}
					}
				},
				{
					"name": "Device App Management Managed App Policies Managed App Policy Target Apps",
					"value": "Device App Management Managed App Policies Managed App Policy Target Apps",
					"action": "Invoke action targetApps",
					"description": "Invoke action targetApps",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/managedAppPolicies/{{$parameter[\"managedAppPolicy-id\"]}}/microsoft.graph.targetApps"
						}
					}
				},
				{
					"name": "Device App Management Managed App Registrations Managed App Registration Applied Policies Managed App Policy Target Apps",
					"value": "Device App Management Managed App Registrations Managed App Registration Applied Policies Managed App Policy Target Apps",
					"action": "Invoke action targetApps",
					"description": "Invoke action targetApps",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/managedAppRegistrations/{{$parameter[\"managedAppRegistration-id\"]}}/appliedPolicies/{{$parameter[\"managedAppPolicy-id\"]}}/microsoft.graph.targetApps"
						}
					}
				},
				{
					"name": "Device App Management Managed App Registrations Managed App Registration Intended Policies Managed App Policy Target Apps",
					"value": "Device App Management Managed App Registrations Managed App Registration Intended Policies Managed App Policy Target Apps",
					"action": "Invoke action targetApps",
					"description": "Invoke action targetApps",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/managedAppRegistrations/{{$parameter[\"managedAppRegistration-id\"]}}/intendedPolicies/{{$parameter[\"managedAppPolicy-id\"]}}/microsoft.graph.targetApps"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books Managed E Book Assign",
					"value": "Device App Management Managed E Books Managed E Book Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device App Management Mdm Windows Information Protection Policies Has Payload Links",
					"value": "Device App Management Mdm Windows Information Protection Policies Has Payload Links",
					"action": "Invoke action hasPayloadLinks",
					"description": "Invoke action hasPayloadLinks",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/mdmWindowsInformationProtectionPolicies/microsoft.graph.hasPayloadLinks"
						}
					}
				},
				{
					"name": "Device App Management Sync Microsoft Store For Business Apps",
					"value": "Device App Management Sync Microsoft Store For Business Apps",
					"action": "Invoke action syncMicrosoftStoreForBusinessApps",
					"description": "Syncs Intune account with Microsoft Store For Business",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/microsoft.graph.syncMicrosoftStoreForBusinessApps"
						}
					}
				},
				{
					"name": "Device App Management Mobile App Configurations Managed Device Mobile App Configuration Assign",
					"value": "Device App Management Mobile App Configurations Managed Device Mobile App Configuration Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/mobileAppConfigurations/{{$parameter[\"managedDeviceMobileAppConfiguration-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Has Payload Links",
					"value": "Device App Management Mobile Apps Has Payload Links",
					"action": "Invoke action hasPayloadLinks",
					"description": "Invoke action hasPayloadLinks",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/mobileApps/microsoft.graph.hasPayloadLinks"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Validate XML",
					"value": "Device App Management Mobile Apps Validate XML",
					"action": "Invoke action validateXml",
					"description": "Invoke action validateXml",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/mobileApps/microsoft.graph.validateXml"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Mobile App Assign",
					"value": "Device App Management Mobile Apps Mobile App Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Mobile App Update Relationships",
					"value": "Device App Management Mobile Apps Mobile App Update Relationships",
					"action": "Invoke action updateRelationships",
					"description": "Invoke action updateRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/microsoft.graph.updateRelationships"
						}
					}
				},
				{
					"name": "Device App Management Policy Sets Get Policy Sets",
					"value": "Device App Management Policy Sets Get Policy Sets",
					"action": "Invoke action getPolicySets",
					"description": "Invoke action getPolicySets",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/policySets/microsoft.graph.getPolicySets"
						}
					}
				},
				{
					"name": "Device App Management Policy Sets Policy Set Update",
					"value": "Device App Management Policy Sets Policy Set Update",
					"action": "Invoke action update",
					"description": "Invoke action update",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/policySets/{{$parameter[\"policySet-id\"]}}/microsoft.graph.update"
						}
					}
				},
				{
					"name": "Device App Management Targeted Managed App Configurations Has Payload Links",
					"value": "Device App Management Targeted Managed App Configurations Has Payload Links",
					"action": "Invoke action hasPayloadLinks",
					"description": "Invoke action hasPayloadLinks",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations/microsoft.graph.hasPayloadLinks"
						}
					}
				},
				{
					"name": "Device App Management Targeted Managed App Configurations Targeted Managed App Configuration Assign",
					"value": "Device App Management Targeted Managed App Configurations Targeted Managed App Configuration Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations/{{$parameter[\"targetedManagedAppConfiguration-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device App Management Targeted Managed App Configurations Targeted Managed App Configuration Target Apps",
					"value": "Device App Management Targeted Managed App Configurations Targeted Managed App Configuration Target Apps",
					"action": "Invoke action targetApps",
					"description": "Invoke action targetApps",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations/{{$parameter[\"targetedManagedAppConfiguration-id\"]}}/microsoft.graph.targetApps"
						}
					}
				},
				{
					"name": "Device App Management Vpp Tokens Sync License Counts",
					"value": "Device App Management Vpp Tokens Sync License Counts",
					"action": "Invoke action syncLicenseCounts",
					"description": "Invoke action syncLicenseCounts",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/vppTokens/microsoft.graph.syncLicenseCounts"
						}
					}
				},
				{
					"name": "Device App Management Vpp Tokens Vpp Token Revoke Licenses",
					"value": "Device App Management Vpp Tokens Vpp Token Revoke Licenses",
					"action": "Invoke action revokeLicenses",
					"description": "Revoke licenses associated with a specific appleVolumePurchaseProgramToken",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/vppTokens/{{$parameter[\"vppToken-id\"]}}/microsoft.graph.revokeLicenses"
						}
					}
				},
				{
					"name": "Device App Management Vpp Tokens Vpp Token Sync Licenses",
					"value": "Device App Management Vpp Tokens Vpp Token Sync Licenses",
					"action": "Invoke action syncLicenses",
					"description": "Syncs licenses associated with a specific appleVolumePurchaseProgramToken",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/vppTokens/{{$parameter[\"vppToken-id\"]}}/microsoft.graph.syncLicenses"
						}
					}
				},
				{
					"name": "Device App Management Wdac Supplemental Policies Windows Defender Application Control Supplemental Policy Assign",
					"value": "Device App Management Wdac Supplemental Policies Windows Defender Application Control Supplemental Policy Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/wdacSupplementalPolicies/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicy-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device App Management Windows Information Protection Device Registrations Windows Information Protection Device Registration Wipe",
					"value": "Device App Management Windows Information Protection Device Registrations Windows Information Protection Device Registration Wipe",
					"action": "Invoke action wipe",
					"description": "Invoke action wipe",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{{$parameter[\"windowsInformationProtectionDeviceRegistration-id\"]}}/microsoft.graph.wipe"
						}
					}
				},
				{
					"name": "Device App Management Windows Managed App Protections Windows Managed App Protection Assign",
					"value": "Device App Management Windows Managed App Protections Windows Managed App Protection Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/windowsManagedAppProtections/{{$parameter[\"windowsManagedAppProtection-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device App Management Windows Managed App Protections Windows Managed App Protection Target Apps",
					"value": "Device App Management Windows Managed App Protections Windows Managed App Protection Target Apps",
					"action": "Invoke action targetApps",
					"description": "Invoke action targetApps",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/windowsManagedAppProtections/{{$parameter[\"windowsManagedAppProtection-id\"]}}/microsoft.graph.targetApps"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /deviceAppManagement/androidManagedAppProtections/microsoft.graph.hasPayloadLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Android Managed App Protections Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "Payload Ids",
			"name": "payloadIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "payloadIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Android Managed App Protections Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}/microsoft.graph.updateStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Device App Management Tasks Device App Management Task Update Status"
					]
				}
			}
		},
		{
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Device App Management Tasks Device App Management Task Update Status"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "unknown",
			"description": "Device app management task status.",
			"options": [
				{
					"name": "Unknown",
					"value": "unknown"
				},
				{
					"name": "Pending",
					"value": "pending"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Completed",
					"value": "completed"
				},
				{
					"name": "Rejected",
					"value": "rejected"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Device App Management Tasks Device App Management Task Update Status"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/iosLobAppProvisioningConfigurations/microsoft.graph.hasPayloadLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "Payload Ids",
			"name": "payloadIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "payloadIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Ios Lob App Provisioning Configuration Assign"
					]
				}
			}
		},
		{
			"displayName": "App Provisioning Configuration Group Assignments",
			"name": "appProvisioningConfigurationGroupAssignments",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "appProvisioningConfigurationGroupAssignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Ios Lob App Provisioning Configuration Assign"
					]
				}
			}
		},
		{
			"displayName": "I OS Lob App Provisioning Config Assignments",
			"name": "iOSLobAppProvisioningConfigAssignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "iOSLobAppProvisioningConfigAssignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Ios Lob App Provisioning Configurations Ios Lob App Provisioning Configuration Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/iosManagedAppProtections/microsoft.graph.hasPayloadLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Ios Managed App Protections Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "Payload Ids",
			"name": "payloadIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "payloadIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Ios Managed App Protections Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}/microsoft.graph.targetApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Managed App Policies Managed App Policy Target Apps"
					]
				}
			}
		},
		{
			"displayName": "Apps",
			"name": "apps",
			"type": "json",
			"default": "[\n  {\n    \"mobileAppIdentifier\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "apps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Managed App Policies Managed App Policy Target Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}/microsoft.graph.targetApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Managed App Registrations Managed App Registration Applied Policies Managed App Policy Target Apps"
					]
				}
			}
		},
		{
			"displayName": "Apps",
			"name": "apps",
			"type": "json",
			"default": "[\n  {\n    \"mobileAppIdentifier\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "apps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Managed App Registrations Managed App Registration Applied Policies Managed App Policy Target Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}/microsoft.graph.targetApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Managed App Registrations Managed App Registration Intended Policies Managed App Policy Target Apps"
					]
				}
			}
		},
		{
			"displayName": "Apps",
			"name": "apps",
			"type": "json",
			"default": "[\n  {\n    \"mobileAppIdentifier\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "apps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Managed App Registrations Managed App Registration Intended Policies Managed App Policy Target Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedEBooks/{managedEBook-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Managed E Books Managed E Book Assign"
					]
				}
			}
		},
		{
			"displayName": "Managed E Book Assignments",
			"name": "managedEBookAssignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "managedEBookAssignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Managed E Books Managed E Book Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies/microsoft.graph.hasPayloadLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Mdm Windows Information Protection Policies Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "Payload Ids",
			"name": "payloadIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "payloadIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Mdm Windows Information Protection Policies Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/microsoft.graph.syncMicrosoftStoreForBusinessApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Sync Microsoft Store For Business Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Mobile App Configurations Managed Device Mobile App Configuration Assign"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Mobile App Configurations Managed Device Mobile App Configuration Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileApps/microsoft.graph.hasPayloadLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Mobile Apps Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "Payload Ids",
			"name": "payloadIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "payloadIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Mobile Apps Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileApps/microsoft.graph.validateXml",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Mobile Apps Validate XML"
					]
				}
			}
		},
		{
			"displayName": "Office Configuration XML",
			"name": "officeConfigurationXml",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "officeConfigurationXml",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Mobile Apps Validate XML"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileApps/{mobileApp-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Mobile Apps Mobile App Assign"
					]
				}
			}
		},
		{
			"displayName": "Mobile App Assignments",
			"name": "mobileAppAssignments",
			"type": "json",
			"default": "[\n  {\n    \"settings\": {},\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "mobileAppAssignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Mobile Apps Mobile App Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileApps/{mobileApp-id}/microsoft.graph.updateRelationships",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Mobile Apps Mobile App Update Relationships"
					]
				}
			}
		},
		{
			"displayName": "Relationships",
			"name": "relationships",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "relationships",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Mobile Apps Mobile App Update Relationships"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/policySets/microsoft.graph.getPolicySets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Policy Sets Get Policy Sets"
					]
				}
			}
		},
		{
			"displayName": "Policy Set Ids",
			"name": "policySetIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "policySetIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Policy Sets Get Policy Sets"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/policySets/{policySet-id}/microsoft.graph.update",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Policy Sets Policy Set Update"
					]
				}
			}
		},
		{
			"displayName": "Added Policy Set Items",
			"name": "addedPolicySetItems",
			"type": "json",
			"default": "[\n  {\n    \"guidedDeploymentTags\": [\n      null\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "addedPolicySetItems",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Policy Sets Policy Set Update"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Policy Sets Policy Set Update"
					]
				}
			}
		},
		{
			"displayName": "Deleted Policy Set Items",
			"name": "deletedPolicySetItems",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "deletedPolicySetItems",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Policy Sets Policy Set Update"
					]
				}
			}
		},
		{
			"displayName": "Updated Policy Set Items",
			"name": "updatedPolicySetItems",
			"type": "json",
			"default": "[\n  {\n    \"guidedDeploymentTags\": [\n      null\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "updatedPolicySetItems",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Policy Sets Policy Set Update"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/targetedManagedAppConfigurations/microsoft.graph.hasPayloadLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "Payload Ids",
			"name": "payloadIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "payloadIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Targeted Managed App Configuration Assign"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Targeted Managed App Configuration Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/microsoft.graph.targetApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Targeted Managed App Configuration Target Apps"
					]
				}
			}
		},
		{
			"displayName": "App Group Type",
			"name": "appGroupType",
			"type": "options",
			"default": "selectedPublicApps",
			"description": "Indicates a collection of apps to target which can be one of several pre-defined lists of apps or a manually selected list of apps",
			"options": [
				{
					"name": "Selected Public Apps",
					"value": "selectedPublicApps"
				},
				{
					"name": "All Core Microsoft Apps",
					"value": "allCoreMicrosoftApps"
				},
				{
					"name": "All Microsoft Apps",
					"value": "allMicrosoftApps"
				},
				{
					"name": "All Apps",
					"value": "allApps"
				}
			],
			"routing": {
				"send": {
					"property": "appGroupType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Targeted Managed App Configuration Target Apps"
					]
				}
			}
		},
		{
			"displayName": "Apps",
			"name": "apps",
			"type": "json",
			"default": "[\n  {\n    \"mobileAppIdentifier\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "apps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Targeted Managed App Configuration Target Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/vppTokens/microsoft.graph.syncLicenseCounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Vpp Tokens Sync License Counts"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/vppTokens/{vppToken-id}/microsoft.graph.revokeLicenses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Vpp Tokens Vpp Token Revoke Licenses"
					]
				}
			}
		},
		{
			"displayName": "Notify Managed Devices",
			"name": "notifyManagedDevices",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "notifyManagedDevices",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Vpp Tokens Vpp Token Revoke Licenses"
					]
				}
			}
		},
		{
			"displayName": "Revoke Untracked Licenses",
			"name": "revokeUntrackedLicenses",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "revokeUntrackedLicenses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Vpp Tokens Vpp Token Revoke Licenses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/vppTokens/{vppToken-id}/microsoft.graph.syncLicenses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Vpp Tokens Vpp Token Sync Licenses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Windows Defender Application Control Supplemental Policy Assign"
					]
				}
			}
		},
		{
			"displayName": "Wdac Policy Assignments",
			"name": "wdacPolicyAssignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "wdacPolicyAssignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Windows Defender Application Control Supplemental Policy Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}/microsoft.graph.wipe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Windows Information Protection Device Registrations Windows Information Protection Device Registration Wipe"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Windows Managed App Protection Assign"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Windows Managed App Protection Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/microsoft.graph.targetApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Windows Managed App Protection Target Apps"
					]
				}
			}
		},
		{
			"displayName": "Apps",
			"name": "apps",
			"type": "json",
			"default": "[\n  {\n    \"mobileAppIdentifier\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "apps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Actions"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Windows Managed App Protection Target Apps"
					]
				}
			}
		},
];
