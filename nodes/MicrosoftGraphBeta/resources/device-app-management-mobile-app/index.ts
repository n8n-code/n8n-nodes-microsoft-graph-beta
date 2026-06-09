import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementMobileAppDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management List Mobile Apps",
					"value": "Device App Management List Mobile Apps",
					"action": "Get mobileApps from deviceAppManagement",
					"description": "The mobile apps.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps"
						}
					}
				},
				{
					"name": "Device App Management Create Mobile Apps",
					"value": "Device App Management Create Mobile Apps",
					"action": "Create new navigation property to mobileApps for deviceAppManagement",
					"description": "Create new navigation property to mobileApps for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/mobileApps"
						}
					}
				},
				{
					"name": "Device App Management Delete Mobile Apps",
					"value": "Device App Management Delete Mobile Apps",
					"action": "Delete navigation property mobileApps for deviceAppManagement",
					"description": "Delete navigation property mobileApps for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Get Mobile Apps",
					"value": "Device App Management Get Mobile Apps",
					"action": "Get mobileApps from deviceAppManagement",
					"description": "The mobile apps.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Update Mobile Apps",
					"value": "Device App Management Update Mobile Apps",
					"action": "Update the navigation property mobileApps in deviceAppManagement",
					"description": "Update the navigation property mobileApps in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps List Assignments",
					"value": "Device App Management Mobile Apps List Assignments",
					"action": "Get assignments from deviceAppManagement",
					"description": "The list of group assignments for this mobile app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Create Assignments",
					"value": "Device App Management Mobile Apps Create Assignments",
					"action": "Create new navigation property to assignments for deviceAppManagement",
					"description": "Create new navigation property to assignments for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Delete Assignments",
					"value": "Device App Management Mobile Apps Delete Assignments",
					"action": "Delete navigation property assignments for deviceAppManagement",
					"description": "Delete navigation property assignments for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/assignments/{{$parameter[\"mobileAppAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Get Assignments",
					"value": "Device App Management Mobile Apps Get Assignments",
					"action": "Get assignments from deviceAppManagement",
					"description": "The list of group assignments for this mobile app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/assignments/{{$parameter[\"mobileAppAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Update Assignments",
					"value": "Device App Management Mobile Apps Update Assignments",
					"action": "Update the navigation property assignments in deviceAppManagement",
					"description": "Update the navigation property assignments in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/assignments/{{$parameter[\"mobileAppAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps List Categories",
					"value": "Device App Management Mobile Apps List Categories",
					"action": "Get categories from deviceAppManagement",
					"description": "The list of categories for this app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/categories"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Get Categories",
					"value": "Device App Management Mobile Apps Get Categories",
					"action": "Get categories from deviceAppManagement",
					"description": "The list of categories for this app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/categories/{{$parameter[\"mobileAppCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps List Device Statuses",
					"value": "Device App Management Mobile Apps List Device Statuses",
					"action": "Get deviceStatuses from deviceAppManagement",
					"description": "The list of installation states for this mobile app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/deviceStatuses"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Create Device Statuses",
					"value": "Device App Management Mobile Apps Create Device Statuses",
					"action": "Create new navigation property to deviceStatuses for deviceAppManagement",
					"description": "Create new navigation property to deviceStatuses for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/deviceStatuses"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Delete Device Statuses",
					"value": "Device App Management Mobile Apps Delete Device Statuses",
					"action": "Delete navigation property deviceStatuses for deviceAppManagement",
					"description": "Delete navigation property deviceStatuses for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/deviceStatuses/{{$parameter[\"mobileAppInstallStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Get Device Statuses",
					"value": "Device App Management Mobile Apps Get Device Statuses",
					"action": "Get deviceStatuses from deviceAppManagement",
					"description": "The list of installation states for this mobile app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/deviceStatuses/{{$parameter[\"mobileAppInstallStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Update Device Statuses",
					"value": "Device App Management Mobile Apps Update Device Statuses",
					"action": "Update the navigation property deviceStatuses in deviceAppManagement",
					"description": "Update the navigation property deviceStatuses in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/deviceStatuses/{{$parameter[\"mobileAppInstallStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Device Statuses Get App",
					"value": "Device App Management Mobile Apps Device Statuses Get App",
					"action": "Get app from deviceAppManagement",
					"description": "The navigation link to the mobile app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/deviceStatuses/{{$parameter[\"mobileAppInstallStatus-id\"]}}/app"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Delete Install Summary",
					"value": "Device App Management Mobile Apps Delete Install Summary",
					"action": "Delete navigation property installSummary for deviceAppManagement",
					"description": "Delete navigation property installSummary for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/installSummary"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Get Install Summary",
					"value": "Device App Management Mobile Apps Get Install Summary",
					"action": "Get installSummary from deviceAppManagement",
					"description": "Mobile App Install Summary.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/installSummary"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Update Install Summary",
					"value": "Device App Management Mobile Apps Update Install Summary",
					"action": "Update the navigation property installSummary in deviceAppManagement",
					"description": "Update the navigation property installSummary in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/installSummary"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps List Relationships",
					"value": "Device App Management Mobile Apps List Relationships",
					"action": "Get relationships from deviceAppManagement",
					"description": "List of relationships for this mobile app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/relationships"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Create Relationships",
					"value": "Device App Management Mobile Apps Create Relationships",
					"action": "Create new navigation property to relationships for deviceAppManagement",
					"description": "Create new navigation property to relationships for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/relationships"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Delete Relationships",
					"value": "Device App Management Mobile Apps Delete Relationships",
					"action": "Delete navigation property relationships for deviceAppManagement",
					"description": "Delete navigation property relationships for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/relationships/{{$parameter[\"mobileAppRelationship-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Get Relationships",
					"value": "Device App Management Mobile Apps Get Relationships",
					"action": "Get relationships from deviceAppManagement",
					"description": "List of relationships for this mobile app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/relationships/{{$parameter[\"mobileAppRelationship-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Update Relationships",
					"value": "Device App Management Mobile Apps Update Relationships",
					"action": "Update the navigation property relationships in deviceAppManagement",
					"description": "Update the navigation property relationships in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/relationships/{{$parameter[\"mobileAppRelationship-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps List User Statuses",
					"value": "Device App Management Mobile Apps List User Statuses",
					"action": "Get userStatuses from deviceAppManagement",
					"description": "The list of installation states for this mobile app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/userStatuses"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Create User Statuses",
					"value": "Device App Management Mobile Apps Create User Statuses",
					"action": "Create new navigation property to userStatuses for deviceAppManagement",
					"description": "Create new navigation property to userStatuses for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/userStatuses"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Delete User Statuses",
					"value": "Device App Management Mobile Apps Delete User Statuses",
					"action": "Delete navigation property userStatuses for deviceAppManagement",
					"description": "Delete navigation property userStatuses for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/userStatuses/{{$parameter[\"userAppInstallStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Get User Statuses",
					"value": "Device App Management Mobile Apps Get User Statuses",
					"action": "Get userStatuses from deviceAppManagement",
					"description": "The list of installation states for this mobile app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/userStatuses/{{$parameter[\"userAppInstallStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Update User Statuses",
					"value": "Device App Management Mobile Apps Update User Statuses",
					"action": "Update the navigation property userStatuses in deviceAppManagement",
					"description": "Update the navigation property userStatuses in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/userStatuses/{{$parameter[\"userAppInstallStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps User Statuses Get App",
					"value": "Device App Management Mobile Apps User Statuses Get App",
					"action": "Get app from deviceAppManagement",
					"description": "The navigation link to the mobile app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/userStatuses/{{$parameter[\"userAppInstallStatus-id\"]}}/app"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps User Statuses List Device Statuses",
					"value": "Device App Management Mobile Apps User Statuses List Device Statuses",
					"action": "Get deviceStatuses from deviceAppManagement",
					"description": "The install state of the app on devices.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/userStatuses/{{$parameter[\"userAppInstallStatus-id\"]}}/deviceStatuses"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps User Statuses Create Device Statuses",
					"value": "Device App Management Mobile Apps User Statuses Create Device Statuses",
					"action": "Create new navigation property to deviceStatuses for deviceAppManagement",
					"description": "Create new navigation property to deviceStatuses for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/userStatuses/{{$parameter[\"userAppInstallStatus-id\"]}}/deviceStatuses"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps User Statuses Delete Device Statuses",
					"value": "Device App Management Mobile Apps User Statuses Delete Device Statuses",
					"action": "Delete navigation property deviceStatuses for deviceAppManagement",
					"description": "Delete navigation property deviceStatuses for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/userStatuses/{{$parameter[\"userAppInstallStatus-id\"]}}/deviceStatuses/{{$parameter[\"mobileAppInstallStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps User Statuses Get Device Statuses",
					"value": "Device App Management Mobile Apps User Statuses Get Device Statuses",
					"action": "Get deviceStatuses from deviceAppManagement",
					"description": "The install state of the app on devices.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/userStatuses/{{$parameter[\"userAppInstallStatus-id\"]}}/deviceStatuses/{{$parameter[\"mobileAppInstallStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps User Statuses Update Device Statuses",
					"value": "Device App Management Mobile Apps User Statuses Update Device Statuses",
					"action": "Update the navigation property deviceStatuses in deviceAppManagement",
					"description": "Update the navigation property deviceStatuses in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/userStatuses/{{$parameter[\"userAppInstallStatus-id\"]}}/deviceStatuses/{{$parameter[\"mobileAppInstallStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps User Statuses Device Statuses Get App",
					"value": "Device App Management Mobile Apps User Statuses Device Statuses Get App",
					"action": "Get app from deviceAppManagement",
					"description": "The navigation link to the mobile app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/userStatuses/{{$parameter[\"userAppInstallStatus-id\"]}}/deviceStatuses/{{$parameter[\"mobileAppInstallStatus-id\"]}}/app"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management List Mobile Apps"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management List Mobile Apps"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management List Mobile Apps"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management List Mobile Apps"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management List Mobile Apps"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management List Mobile Apps"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management List Mobile Apps"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management List Mobile Apps"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management List Mobile Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Create Mobile Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileApps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Create Mobile Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/mobileApps/{mobileApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Delete Mobile Apps"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Delete Mobile Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/{mobileApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Get Mobile Apps"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Get Mobile Apps"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Get Mobile Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileApps/{mobileApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Update Mobile Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileApps/{mobileApp-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Update Mobile Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/{mobileApp-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Assignments"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Assignments"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Assignments"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Assignments"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Assignments"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Assignments"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Assignments"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Assignments"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileApps/{mobileApp-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileApps/{mobileApp-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Delete Assignments"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Get Assignments"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Get Assignments"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/{mobileApp-id}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Categories"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Categories"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Categories"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Categories"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Categories"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Categories"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Categories"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Categories"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/{mobileApp-id}/categories/{mobileAppCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Get Categories"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Get Categories"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Get Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/{mobileApp-id}/deviceStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileApps/{mobileApp-id}/deviceStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Create Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileApps/{mobileApp-id}/deviceStatuses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Create Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/deviceStatuses/{mobileAppInstallStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Delete Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Delete Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/{mobileApp-id}/deviceStatuses/{mobileAppInstallStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Get Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Get Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Get Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/deviceStatuses/{mobileAppInstallStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Update Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/deviceStatuses/{mobileAppInstallStatus-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Update Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/{mobileApp-id}/deviceStatuses/{mobileAppInstallStatus-id}/app",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Device Statuses Get App"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Device Statuses Get App"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Device Statuses Get App"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/installSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Delete Install Summary"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Delete Install Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/{mobileApp-id}/installSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Get Install Summary"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Get Install Summary"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Get Install Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/installSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Update Install Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/installSummary<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Update Install Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/{mobileApp-id}/relationships",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Relationships"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Relationships"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Relationships"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Relationships"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Relationships"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Relationships"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Relationships"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Relationships"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List Relationships"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileApps/{mobileApp-id}/relationships",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Create Relationships"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileApps/{mobileApp-id}/relationships<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Create Relationships"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Delete Relationships"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Delete Relationships"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Get Relationships"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Get Relationships"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Get Relationships"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Update Relationships"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Update Relationships"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/{mobileApp-id}/userStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List User Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List User Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List User Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List User Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List User Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List User Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List User Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List User Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps List User Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileApps/{mobileApp-id}/userStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Create User Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileApps/{mobileApp-id}/userStatuses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Create User Statuses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/userStatuses/{userAppInstallStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Delete User Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Delete User Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/{mobileApp-id}/userStatuses/{userAppInstallStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Get User Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Get User Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Get User Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/userStatuses/{userAppInstallStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Update User Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/userStatuses/{userAppInstallStatus-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps Update User Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/{mobileApp-id}/userStatuses/{userAppInstallStatus-id}/app",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses Get App"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses Get App"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses Get App"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/{mobileApp-id}/userStatuses/{userAppInstallStatus-id}/deviceStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses List Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses List Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses List Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses List Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses List Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses List Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses List Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses List Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses List Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileApps/{mobileApp-id}/userStatuses/{userAppInstallStatus-id}/deviceStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses Create Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/mobileApps/{mobileApp-id}/userStatuses/{userAppInstallStatus-id}/deviceStatuses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses Create Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/userStatuses/{userAppInstallStatus-id}/deviceStatuses/{mobileAppInstallStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses Delete Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses Delete Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/{mobileApp-id}/userStatuses/{userAppInstallStatus-id}/deviceStatuses/{mobileAppInstallStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses Get Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses Get Device Statuses"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses Get Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/userStatuses/{userAppInstallStatus-id}/deviceStatuses/{mobileAppInstallStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses Update Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/userStatuses/{userAppInstallStatus-id}/deviceStatuses/{mobileAppInstallStatus-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses Update Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/{mobileApp-id}/userStatuses/{userAppInstallStatus-id}/deviceStatuses/{mobileAppInstallStatus-id}/app",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses Device Statuses Get App"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses Device Statuses Get App"
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
						"Device App Management Mobile App"
					],
					"operation": [
						"Device App Management Mobile Apps User Statuses Device Statuses Get App"
					]
				}
			}
		},
];
