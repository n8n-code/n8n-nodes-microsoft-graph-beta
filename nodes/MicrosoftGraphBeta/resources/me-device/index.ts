import type { INodeProperties } from 'n8n-workflow';

export const meDeviceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					]
				}
			},
			"options": [
				{
					"name": "Me List Devices",
					"value": "Me List Devices",
					"action": "Get devices from me",
					"description": "Get devices from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices"
						}
					}
				},
				{
					"name": "Me Create Devices",
					"value": "Me Create Devices",
					"action": "Create new navigation property to devices for me",
					"description": "Create new navigation property to devices for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/devices"
						}
					}
				},
				{
					"name": "Me Delete Devices",
					"value": "Me Delete Devices",
					"action": "Delete navigation property devices for me",
					"description": "Delete navigation property devices for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Devices",
					"value": "Me Get Devices",
					"action": "Get devices from me",
					"description": "Get devices from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}"
						}
					}
				},
				{
					"name": "Me Update Devices",
					"value": "Me Update Devices",
					"action": "Update the navigation property devices in me",
					"description": "Update the navigation property devices in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}"
						}
					}
				},
				{
					"name": "Me Devices List Commands",
					"value": "Me Devices List Commands",
					"action": "Get commands from me",
					"description": "Set of commands sent to this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/commands"
						}
					}
				},
				{
					"name": "Me Devices Create Commands",
					"value": "Me Devices Create Commands",
					"action": "Create new navigation property to commands for me",
					"description": "Create new navigation property to commands for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/commands"
						}
					}
				},
				{
					"name": "Me Devices Delete Commands",
					"value": "Me Devices Delete Commands",
					"action": "Delete navigation property commands for me",
					"description": "Delete navigation property commands for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/commands/{{$parameter[\"command-id\"]}}"
						}
					}
				},
				{
					"name": "Me Devices Get Commands",
					"value": "Me Devices Get Commands",
					"action": "Get commands from me",
					"description": "Set of commands sent to this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/commands/{{$parameter[\"command-id\"]}}"
						}
					}
				},
				{
					"name": "Me Devices Update Commands",
					"value": "Me Devices Update Commands",
					"action": "Update the navigation property commands in me",
					"description": "Update the navigation property commands in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/commands/{{$parameter[\"command-id\"]}}"
						}
					}
				},
				{
					"name": "Me Devices Commands Get Responsepayload",
					"value": "Me Devices Commands Get Responsepayload",
					"action": "Get responsepayload from me",
					"description": "Get responsepayload from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/commands/{{$parameter[\"command-id\"]}}/responsepayload"
						}
					}
				},
				{
					"name": "Me Devices List Extensions",
					"value": "Me Devices List Extensions",
					"action": "Get extensions from me",
					"description": "The collection of open extensions defined for the device. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Me Devices Create Extensions",
					"value": "Me Devices Create Extensions",
					"action": "Create new navigation property to extensions for me",
					"description": "Create new navigation property to extensions for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Me Devices Delete Extensions",
					"value": "Me Devices Delete Extensions",
					"action": "Delete navigation property extensions for me",
					"description": "Delete navigation property extensions for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Devices Get Extensions",
					"value": "Me Devices Get Extensions",
					"action": "Get extensions from me",
					"description": "The collection of open extensions defined for the device. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Devices Update Extensions",
					"value": "Me Devices Update Extensions",
					"action": "Update the navigation property extensions in me",
					"description": "Update the navigation property extensions in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Devices List Member Of",
					"value": "Me Devices List Member Of",
					"action": "Get memberOf from me",
					"description": "Groups and administrative units that this device is a member of. Read-only. Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/memberOf"
						}
					}
				},
				{
					"name": "Me Devices Get Member Of",
					"value": "Me Devices Get Member Of",
					"action": "Get memberOf from me",
					"description": "Groups and administrative units that this device is a member of. Read-only. Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}"
						}
					}
				},
				{
					"name": "Me Devices List Registered Owners",
					"value": "Me Devices List Registered Owners",
					"action": "Get registeredOwners from me",
					"description": "The user that cloud joined the device or registered their personal device. The registered owner is set at the time of registration. Currently, there can be only one owner. Read-only. Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/registeredOwners"
						}
					}
				},
				{
					"name": "Me Devices List Ref Registered Owners",
					"value": "Me Devices List Ref Registered Owners",
					"action": "Get ref of registeredOwners from me",
					"description": "The user that cloud joined the device or registered their personal device. The registered owner is set at the time of registration. Currently, there can be only one owner. Read-only. Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/registeredOwners/$ref"
						}
					}
				},
				{
					"name": "Me Devices Create Ref Registered Owners",
					"value": "Me Devices Create Ref Registered Owners",
					"action": "Create new navigation property ref to registeredOwners for me",
					"description": "Create new navigation property ref to registeredOwners for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/registeredOwners/$ref"
						}
					}
				},
				{
					"name": "Me Devices Delete Ref Registered Owners",
					"value": "Me Devices Delete Ref Registered Owners",
					"action": "Delete ref of navigation property registeredOwners for me",
					"description": "Delete ref of navigation property registeredOwners for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/registeredOwners/{{$parameter[\"directoryObject-id\"]}}/$ref"
						}
					}
				},
				{
					"name": "Me Devices List Registered Users",
					"value": "Me Devices List Registered Users",
					"action": "Get registeredUsers from me",
					"description": "Collection of registered users of the device. For cloud joined devices and registered personal devices, registered users are set to the same value as registered owners at the time of registration. Read-only. Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/registeredUsers"
						}
					}
				},
				{
					"name": "Me Devices Get Registered Users",
					"value": "Me Devices Get Registered Users",
					"action": "Get registeredUsers from me",
					"description": "Collection of registered users of the device. For cloud joined devices and registered personal devices, registered users are set to the same value as registered owners at the time of registration. Read-only. Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/registeredUsers/{{$parameter[\"directoryObject-id\"]}}"
						}
					}
				},
				{
					"name": "Me Devices List Transitive Member Of",
					"value": "Me Devices List Transitive Member Of",
					"action": "Get transitiveMemberOf from me",
					"description": "Groups and administrative units that this device is a member of. This operation is transitive. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf"
						}
					}
				},
				{
					"name": "Me Devices Get Transitive Member Of",
					"value": "Me Devices Get Transitive Member Of",
					"action": "Get transitiveMemberOf from me",
					"description": "Groups and administrative units that this device is a member of. This operation is transitive. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}"
						}
					}
				},
				{
					"name": "Me Devices List Usage Rights",
					"value": "Me Devices List Usage Rights",
					"action": "List device usageRights",
					"description": "Retrieve a list of usageRight objects for a given device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/usageRights"
						}
					}
				},
				{
					"name": "Me Devices Create Usage Rights",
					"value": "Me Devices Create Usage Rights",
					"action": "Create new navigation property to usageRights for me",
					"description": "Create new navigation property to usageRights for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/usageRights"
						}
					}
				},
				{
					"name": "Me Devices Delete Usage Rights",
					"value": "Me Devices Delete Usage Rights",
					"action": "Delete navigation property usageRights for me",
					"description": "Delete navigation property usageRights for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/usageRights/{{$parameter[\"usageRight-id\"]}}"
						}
					}
				},
				{
					"name": "Me Devices Get Usage Rights",
					"value": "Me Devices Get Usage Rights",
					"action": "Get usageRights from me",
					"description": "Represents the usage rights a device has been granted.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/usageRights/{{$parameter[\"usageRight-id\"]}}"
						}
					}
				},
				{
					"name": "Me Devices Update Usage Rights",
					"value": "Me Devices Update Usage Rights",
					"action": "Update the navigation property usageRights in me",
					"description": "Update the navigation property usageRights in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/usageRights/{{$parameter[\"usageRight-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/devices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me List Devices"
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
						"Me Device"
					],
					"operation": [
						"Me List Devices"
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
						"Me Device"
					],
					"operation": [
						"Me List Devices"
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
						"Me Device"
					],
					"operation": [
						"Me List Devices"
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
						"Me Device"
					],
					"operation": [
						"Me List Devices"
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
						"Me Device"
					],
					"operation": [
						"Me List Devices"
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
						"Me Device"
					],
					"operation": [
						"Me List Devices"
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
						"Me Device"
					],
					"operation": [
						"Me List Devices"
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
						"Me Device"
					],
					"operation": [
						"Me List Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /me/devices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Create Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /me/devices<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Create Devices"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/devices/{device-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Delete Devices"
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
						"Me Device"
					],
					"operation": [
						"Me Delete Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Get Devices"
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
						"Me Device"
					],
					"operation": [
						"Me Get Devices"
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
						"Me Device"
					],
					"operation": [
						"Me Get Devices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/devices/{device-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Update Devices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/devices/{device-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Update Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/commands",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices List Commands"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Commands"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Commands"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Commands"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Commands"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Commands"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Commands"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Commands"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Commands"
					]
				}
			}
		},
		{
			"displayName": "POST /me/devices/{device-id}/commands",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Create Commands"
					]
				}
			}
		},
		{
			"displayName": "POST /me/devices/{device-id}/commands<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Create Commands"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/devices/{device-id}/commands/{command-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Delete Commands"
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
						"Me Device"
					],
					"operation": [
						"Me Devices Delete Commands"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/commands/{command-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Get Commands"
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
						"Me Device"
					],
					"operation": [
						"Me Devices Get Commands"
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
						"Me Device"
					],
					"operation": [
						"Me Devices Get Commands"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/devices/{device-id}/commands/{command-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Update Commands"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/devices/{device-id}/commands/{command-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Update Commands"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/commands/{command-id}/responsepayload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Commands Get Responsepayload"
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
						"Me Device"
					],
					"operation": [
						"Me Devices Commands Get Responsepayload"
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
						"Me Device"
					],
					"operation": [
						"Me Devices Commands Get Responsepayload"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices List Extensions"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Extensions"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Extensions"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Extensions"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Extensions"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Extensions"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Extensions"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Extensions"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/devices/{device-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/devices/{device-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/devices/{device-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Delete Extensions"
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
						"Me Device"
					],
					"operation": [
						"Me Devices Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Get Extensions"
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
						"Me Device"
					],
					"operation": [
						"Me Devices Get Extensions"
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
						"Me Device"
					],
					"operation": [
						"Me Devices Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/devices/{device-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/devices/{device-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/memberOf",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices List Member Of"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices List Member Of"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Member Of"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Member Of"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Member Of"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Member Of"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Member Of"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Member Of"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Member Of"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Member Of"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/memberOf/{directoryObject-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Get Member Of"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Get Member Of"
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
						"Me Device"
					],
					"operation": [
						"Me Devices Get Member Of"
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
						"Me Device"
					],
					"operation": [
						"Me Devices Get Member Of"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/registeredOwners",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices List Registered Owners"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices List Registered Owners"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Registered Owners"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Registered Owners"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Registered Owners"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Registered Owners"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Registered Owners"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Registered Owners"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Registered Owners"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Registered Owners"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/registeredOwners/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices List Ref Registered Owners"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices List Ref Registered Owners"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Ref Registered Owners"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Ref Registered Owners"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Ref Registered Owners"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Ref Registered Owners"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Ref Registered Owners"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Ref Registered Owners"
					]
				}
			}
		},
		{
			"displayName": "POST /me/devices/{device-id}/registeredOwners/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Create Ref Registered Owners"
					]
				}
			}
		},
		{
			"displayName": "Odata ID",
			"name": "@odata-id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Create Ref Registered Owners"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/devices/{device-id}/registeredOwners/{directoryObject-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Delete Ref Registered Owners"
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
						"Me Device"
					],
					"operation": [
						"Me Devices Delete Ref Registered Owners"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "%40id",
			"description": "Delete Uri",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "@id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Delete Ref Registered Owners"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/registeredUsers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices List Registered Users"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices List Registered Users"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Registered Users"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Registered Users"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Registered Users"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Registered Users"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Registered Users"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Registered Users"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Registered Users"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Registered Users"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/registeredUsers/{directoryObject-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Get Registered Users"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Get Registered Users"
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
						"Me Device"
					],
					"operation": [
						"Me Devices Get Registered Users"
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
						"Me Device"
					],
					"operation": [
						"Me Devices Get Registered Users"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/transitiveMemberOf",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices List Transitive Member Of"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices List Transitive Member Of"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Transitive Member Of"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Transitive Member Of"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Transitive Member Of"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Transitive Member Of"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Transitive Member Of"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Transitive Member Of"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Transitive Member Of"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Transitive Member Of"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/transitiveMemberOf/{directoryObject-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Get Transitive Member Of"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Get Transitive Member Of"
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
						"Me Device"
					],
					"operation": [
						"Me Devices Get Transitive Member Of"
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
						"Me Device"
					],
					"operation": [
						"Me Devices Get Transitive Member Of"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/usageRights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices List Usage Rights"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Usage Rights"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Usage Rights"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Usage Rights"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Usage Rights"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Usage Rights"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Usage Rights"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Usage Rights"
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
						"Me Device"
					],
					"operation": [
						"Me Devices List Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "POST /me/devices/{device-id}/usageRights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Create Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "POST /me/devices/{device-id}/usageRights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Create Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/devices/{device-id}/usageRights/{usageRight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Delete Usage Rights"
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
						"Me Device"
					],
					"operation": [
						"Me Devices Delete Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/usageRights/{usageRight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Get Usage Rights"
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
						"Me Device"
					],
					"operation": [
						"Me Devices Get Usage Rights"
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
						"Me Device"
					],
					"operation": [
						"Me Devices Get Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/devices/{device-id}/usageRights/{usageRight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Update Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/devices/{device-id}/usageRights/{usageRight-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Device"
					],
					"operation": [
						"Me Devices Update Usage Rights"
					]
				}
			}
		},
];
