import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDepOnboardingSettingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Dep Onboarding Settings",
					"value": "Device Management List Dep Onboarding Settings",
					"action": "Get depOnboardingSettings from deviceManagement",
					"description": "This collections of multiple DEP tokens per-tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/depOnboardingSettings"
						}
					}
				},
				{
					"name": "Device Management Create Dep Onboarding Settings",
					"value": "Device Management Create Dep Onboarding Settings",
					"action": "Create new navigation property to depOnboardingSettings for deviceManagement",
					"description": "Create new navigation property to depOnboardingSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/depOnboardingSettings"
						}
					}
				},
				{
					"name": "Device Management Delete Dep Onboarding Settings",
					"value": "Device Management Delete Dep Onboarding Settings",
					"action": "Delete navigation property depOnboardingSettings for deviceManagement",
					"description": "Delete navigation property depOnboardingSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Dep Onboarding Settings",
					"value": "Device Management Get Dep Onboarding Settings",
					"action": "Get depOnboardingSettings from deviceManagement",
					"description": "This collections of multiple DEP tokens per-tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Dep Onboarding Settings",
					"value": "Device Management Update Dep Onboarding Settings",
					"action": "Update the navigation property depOnboardingSettings in deviceManagement",
					"description": "Update the navigation property depOnboardingSettings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Get Default Ios Enrollment Profile",
					"value": "Device Management Dep Onboarding Settings Get Default Ios Enrollment Profile",
					"action": "Get defaultIosEnrollmentProfile from deviceManagement",
					"description": "Default iOS Enrollment Profile",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/defaultIosEnrollmentProfile"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Get Default Mac Os Enrollment Profile",
					"value": "Device Management Dep Onboarding Settings Get Default Mac Os Enrollment Profile",
					"action": "Get defaultMacOsEnrollmentProfile from deviceManagement",
					"description": "Default MacOs Enrollment Profile",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/defaultMacOsEnrollmentProfile"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings List Enrollment Profiles",
					"value": "Device Management Dep Onboarding Settings List Enrollment Profiles",
					"action": "Get enrollmentProfiles from deviceManagement",
					"description": "The enrollment profiles.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/enrollmentProfiles"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Create Enrollment Profiles",
					"value": "Device Management Dep Onboarding Settings Create Enrollment Profiles",
					"action": "Create new navigation property to enrollmentProfiles for deviceManagement",
					"description": "Create new navigation property to enrollmentProfiles for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/enrollmentProfiles"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Delete Enrollment Profiles",
					"value": "Device Management Dep Onboarding Settings Delete Enrollment Profiles",
					"action": "Delete navigation property enrollmentProfiles for deviceManagement",
					"description": "Delete navigation property enrollmentProfiles for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/enrollmentProfiles/{{$parameter[\"enrollmentProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Get Enrollment Profiles",
					"value": "Device Management Dep Onboarding Settings Get Enrollment Profiles",
					"action": "Get enrollmentProfiles from deviceManagement",
					"description": "The enrollment profiles.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/enrollmentProfiles/{{$parameter[\"enrollmentProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Update Enrollment Profiles",
					"value": "Device Management Dep Onboarding Settings Update Enrollment Profiles",
					"action": "Update the navigation property enrollmentProfiles in deviceManagement",
					"description": "Update the navigation property enrollmentProfiles in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/enrollmentProfiles/{{$parameter[\"enrollmentProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings List Imported Apple Device Identities",
					"value": "Device Management Dep Onboarding Settings List Imported Apple Device Identities",
					"action": "Get importedAppleDeviceIdentities from deviceManagement",
					"description": "The imported Apple device identities.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/importedAppleDeviceIdentities"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Create Imported Apple Device Identities",
					"value": "Device Management Dep Onboarding Settings Create Imported Apple Device Identities",
					"action": "Create new navigation property to importedAppleDeviceIdentities for deviceManagement",
					"description": "Create new navigation property to importedAppleDeviceIdentities for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/importedAppleDeviceIdentities"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Delete Imported Apple Device Identities",
					"value": "Device Management Dep Onboarding Settings Delete Imported Apple Device Identities",
					"action": "Delete navigation property importedAppleDeviceIdentities for deviceManagement",
					"description": "Delete navigation property importedAppleDeviceIdentities for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/importedAppleDeviceIdentities/{{$parameter[\"importedAppleDeviceIdentity-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Get Imported Apple Device Identities",
					"value": "Device Management Dep Onboarding Settings Get Imported Apple Device Identities",
					"action": "Get importedAppleDeviceIdentities from deviceManagement",
					"description": "The imported Apple device identities.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/importedAppleDeviceIdentities/{{$parameter[\"importedAppleDeviceIdentity-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Update Imported Apple Device Identities",
					"value": "Device Management Dep Onboarding Settings Update Imported Apple Device Identities",
					"action": "Update the navigation property importedAppleDeviceIdentities in deviceManagement",
					"description": "Update the navigation property importedAppleDeviceIdentities in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/importedAppleDeviceIdentities/{{$parameter[\"importedAppleDeviceIdentity-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/depOnboardingSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management List Dep Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management List Dep Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management List Dep Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management List Dep Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management List Dep Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management List Dep Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management List Dep Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management List Dep Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management List Dep Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/depOnboardingSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Create Dep Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/depOnboardingSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Create Dep Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Delete Dep Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Delete Dep Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Get Dep Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Get Dep Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Get Dep Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Update Dep Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Update Dep Onboarding Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultIosEnrollmentProfile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Get Default Ios Enrollment Profile"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Get Default Ios Enrollment Profile"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Get Default Ios Enrollment Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultMacOsEnrollmentProfile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Get Default Mac Os Enrollment Profile"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Get Default Mac Os Enrollment Profile"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Get Default Mac Os Enrollment Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings List Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings List Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings List Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings List Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings List Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings List Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings List Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings List Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings List Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Create Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Create Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Delete Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Delete Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Get Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Get Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Get Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Update Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Update Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings List Imported Apple Device Identities"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings List Imported Apple Device Identities"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings List Imported Apple Device Identities"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings List Imported Apple Device Identities"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings List Imported Apple Device Identities"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings List Imported Apple Device Identities"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings List Imported Apple Device Identities"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings List Imported Apple Device Identities"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings List Imported Apple Device Identities"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Create Imported Apple Device Identities"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Create Imported Apple Device Identities"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Delete Imported Apple Device Identities"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Delete Imported Apple Device Identities"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Get Imported Apple Device Identities"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Get Imported Apple Device Identities"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Get Imported Apple Device Identities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Update Imported Apple Device Identities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Dep Onboarding Setting"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Update Imported Apple Device Identities"
					]
				}
			}
		},
];
