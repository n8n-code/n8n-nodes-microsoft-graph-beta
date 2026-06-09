import type { INodeProperties } from 'n8n-workflow';

export const printActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Print Actions"
					]
				}
			},
			"options": [
				{
					"name": "Print Printers Create",
					"value": "Print Printers Create",
					"action": "Invoke action create",
					"description": "Create (register) a printer with the Universal Print service. This is a long-running operation and as such, it returns a printerCreateOperation that can be used to track and verify the registration of the printer.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/printers/microsoft.graph.create"
						}
					}
				},
				{
					"name": "Print Printers Printer Reset Defaults",
					"value": "Print Printers Printer Reset Defaults",
					"action": "Invoke action resetDefaults",
					"description": "Invoke action resetDefaults",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/printers/{{$parameter[\"printer-id\"]}}/microsoft.graph.resetDefaults"
						}
					}
				},
				{
					"name": "Print Printers Printer Restore Factory Defaults",
					"value": "Print Printers Printer Restore Factory Defaults",
					"action": "Invoke action restoreFactoryDefaults",
					"description": "Restore a printer's default settings to the values specified by the manufacturer.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/printers/{{$parameter[\"printer-id\"]}}/microsoft.graph.restoreFactoryDefaults"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /print/printers/microsoft.graph.create",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Actions"
					],
					"operation": [
						"Print Printers Create"
					]
				}
			}
		},
		{
			"displayName": "Certificate Signing Request",
			"name": "certificateSigningRequest",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "certificateSigningRequest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Actions"
					],
					"operation": [
						"Print Printers Create"
					]
				}
			}
		},
		{
			"displayName": "Connector Id",
			"name": "connectorId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "connectorId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Actions"
					],
					"operation": [
						"Print Printers Create"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Actions"
					],
					"operation": [
						"Print Printers Create"
					]
				}
			}
		},
		{
			"displayName": "Has Physical Device",
			"name": "hasPhysicalDevice",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "hasPhysicalDevice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Actions"
					],
					"operation": [
						"Print Printers Create"
					]
				}
			}
		},
		{
			"displayName": "Manufacturer",
			"name": "manufacturer",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "manufacturer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Actions"
					],
					"operation": [
						"Print Printers Create"
					]
				}
			}
		},
		{
			"displayName": "Model",
			"name": "model",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "model",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Actions"
					],
					"operation": [
						"Print Printers Create"
					]
				}
			}
		},
		{
			"displayName": "Physical Device Id",
			"name": "physicalDeviceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "physicalDeviceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Actions"
					],
					"operation": [
						"Print Printers Create"
					]
				}
			}
		},
		{
			"displayName": "POST /print/printers/{printer-id}/microsoft.graph.resetDefaults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Actions"
					],
					"operation": [
						"Print Printers Printer Reset Defaults"
					]
				}
			}
		},
		{
			"displayName": "POST /print/printers/{printer-id}/microsoft.graph.restoreFactoryDefaults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Actions"
					],
					"operation": [
						"Print Printers Printer Restore Factory Defaults"
					]
				}
			}
		},
];
